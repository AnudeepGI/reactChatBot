import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import testUser from "../actions/testUser"
import msgUpate from "../actions/msgUpate"
import chatBotApi from '../service/chatBotApi';

class chatFooter extends Component {


    testUserVal(val) {
        let apiRespose = chatBotApi('http://localhost:8000/')
        let that = this;
        apiRespose.then(function (response) {
            that.props.msgUpate(response.data.result.fulfillment.speech, val);
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
    return bindActionCreators({ testUser: testUser, msgUpate: msgUpate }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(chatFooter);