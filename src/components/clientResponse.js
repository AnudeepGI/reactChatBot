import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class clientResponse extends Component {
    render() {
        console.log(this.props)

        if (this.props.state.msg.clientMsg) {
            return (
                <div className="msg right-msg">
                    <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)' }} />
                    <div className="msg-bubble">
                        <div className="msg-info">
                            <div className="msg-info-name">User !!!</div>
                            <div className="msg-info-time">12:45</div>
                        </div>
                        <div className="msg-text">
                            {this.props.state.msg.clientMsg}
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

export default connect(mapStateToProps, '')(clientResponse);