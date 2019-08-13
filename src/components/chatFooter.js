import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import chat from "../actions/chat"

import chatBotApi from '../service/chatBotApi';

class chatFooter extends Component {


    testUserVal(val) {
        let apiRespose = chatBotApi('http://localhost:8000/')
        let that = this;

        this.props.chat('client', val);
        apiRespose.then(function (response) {
            that.props.chat('bot', response.data.result.fulfillment.speech)
        })
    }

    render() {
        return (
            <div className="msger-inputarea" >
                <input type="text" id="myText" onChange={this.handleChange} className="msger-input" placeholder="Enter your message..." />
                <button className="msger-send-btn" onClick={() => {
                    this.testUserVal(document.getElementById("myText").value);
                    document.getElementById("myText").value = ""
                }} >Send</button>
            </div >
        )
    }
}

//Pass state component
function mapStateToProps(state) {
    return {
        state
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        chat: chat
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(chatFooter);