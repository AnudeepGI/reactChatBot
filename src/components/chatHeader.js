import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ChatHeader extends Component {
    render() {
        return (
            <header className="msger-header" >
                <div className="msger-header-title">
                    <i className="fas fa-comment-alt" />
                    {this.props.state.chatTitle.title}
                </div>
                <div className="msger-header-options">
                    <span>
                        <i className="fas fa-cog" />
                    </span>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps, '')(ChatHeader);