import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class online_marketing_affiliate_program extends Component {
    render() {
        return (
            <div>
                <h2>Online marketing and affiliate programs</h2>
                {this.props.children}
            </div>
        );
    }
}