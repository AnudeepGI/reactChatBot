import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BotResponse from './botResponse';
import ClientResponse from './clientResponse';
import msgUpdate from "../actions/msgUpate"


class chatBoody extends Component {
    render() {
        return (
            <div>
                <div >
                    <ClientResponse />
                    <BotResponse />
                </div>
            </div>
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
    return bindActionCreators({ msgUpdate: msgUpdate }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(chatBoody);