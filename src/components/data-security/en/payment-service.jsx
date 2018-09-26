import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class payment_service extends Component {
    render() {
        return (
            <div>
                <h2>Payment service providers</h2>
                {this.props.children}
            </div>
        );
    }
}