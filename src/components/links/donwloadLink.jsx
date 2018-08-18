import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class DownloadLink extends Component {
    render() {
        return (
            <a href={this.props.url} name={this.props.name} download={this.props.text}>
                {this.props.children}
            </a>
        );
    }
}

DownloadLink.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    text: PropTypes.string
}