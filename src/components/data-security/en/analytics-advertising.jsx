import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class analytics_advertising extends Component {
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

analytics_advertising.propTypes = {
    headline: PropTypes.string.isRequired
}