import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class chatBoody extends Component {
    render() {
        let temp1 = this.props.state.defaultChatMsg;
        let classNameCl = "";
        let img = "";
        let chatVal = temp1.map((val) => {
            classNameCl = (val.source === 'bot') ? 'msg left-msg' : 'msg right-msg';
            img = (val.source === 'bot') ? 'url(https://image.flaticon.com/icons/svg/327/327779.svg)' : 'url(https://image.flaticon.com/icons/svg/145/145867.svg)';

            return (
                < div className={classNameCl} >

                    <div className="msg-img" style={{ backgroundImage: img }} />

                    <div className="msg-bubble">
                        <div className="msg-info">
                            <div className="msg-info-name">Bot</div>
                            <div className="msg-info-time">12:45</div>
                        </div>
                        <div className="msg-text">
                            {val.msg}
                        </div>
                    </div>
                </div >
            );
        });

        return (
            <div>
                <div >
                    {chatVal}

                </div>
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



export default connect(mapStateToProps, '')(chatBoody);