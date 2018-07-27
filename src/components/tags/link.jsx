import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class Link extends Component {
    render() {
        return (
            <a href={this.props.url} name={this.props.name}>
                <div>{this.props.text}</div>
            </a>
        );
    }
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    text: PropTypes.string.isRequired
}