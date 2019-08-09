import React, { Component } from 'react';

class BotResponse extends Component {

    render() {
        return (
            <div className="msg left-msg" >
                <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)' }} />
                <div className="msg-bubble">
                    <div className="msg-info">
                        <div className="msg-info-name">{this.props.valProps.title}</div>
                        <div className="msg-info-time">12:45</div>
                    </div>
                    <div className="msg-text">
                        {this.props.valProps.msg}
                    </div>
                </div>
            </div>
        );
    }
}

export default BotResponse;