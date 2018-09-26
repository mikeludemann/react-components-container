import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class plugins_tools extends Component {
    render() {
        return (
            <div>
                <h2>Plugins and tools</h2>
                {this.props.children}
            </div>
        );
    }
}