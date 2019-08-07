import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class clientResponse extends Component {
    render() {

        return (
            <div className="msg right-msg">
                <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)' }} />
                <div className="msg-bubble">
                    <div className="msg-info">
                        <div className="msg-info-name">{this.props.state.msg.bot.title}</div>
                        <div className="msg-info-time">{this.props.state.msg.bot.time}</div>
                    </div>
                    <div className="msg-text">{this.props.state.msg.bot.msg}</div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        state
    };
}




export default connect(mapStateToProps, '')(clientResponse);