import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class data_security extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.headline}</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

data_security.propTypes = {
    headline: PropTypes.string.isRequired
}