import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BotResponse from './botResponse';
import ClientResponse from './clientResponse';
import msgUpdate from "../actions/msgUpate"


class chatBoody extends Component {
    render() {

        const listItems = this.props.state.msg.map((number, item) => {
            console.log("##############")
            console.log(number[item])
            console.log(number)
            console.log("##############")
            return (
                <div >
                    <ClientResponse valProps={number[item]} />
                    <BotResponse valProps={number[item]} />
                </div>
            )
        });

        return (
            <div>
                {listItems}
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