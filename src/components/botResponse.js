import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BotResponse extends Component {
    render() {
        console.log(this.props.states)
        if (this.props.state.msg.botMsg) {
            return (
                <div className="msg left-msg" >
                    <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)' }} />
                    <div className="msg-bubble">
                        <div className="msg-info">
                            <div className="msg-info-name">Bot</div>
                            <div className="msg-info-time">12:45</div>
                        </div>
                        <div className="msg-text">
                            {this.props.state.msg.botMsg}
                        </div>
                    </div>
                </div>
            );
        }
        return ("");

    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps, '')(BotResponse);