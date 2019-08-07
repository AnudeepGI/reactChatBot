import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";



class chatFooter extends Component {

    handleChange = (e) => {
        // let val += e.target.value;
        // console.log(e.target.value);
    }
    render() {
        return (
            <div className="msger-inputarea" >
                <input type="text" id="myText" onChange={this.handleChange} className="msger-input" placeholder="Enter your message..." />
                <button className="msger-send-btn" onClick={() => this.props.testUser(document.getElementById("myText").value)} >Send</button>
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

function testUser(val) {
    return {
        type: "USER_SELECTED",
        payload: val
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ testUser: testUser }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(chatFooter);