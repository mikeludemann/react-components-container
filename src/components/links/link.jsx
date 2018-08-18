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

// -------------------------------------------------------

export default class LinkContainer extends Component {
    render() {
        return (
            <a href={this.props.url} name={this.props.name}>
                {this.props.children}
            </a>
        );
    }
}

LinkContainer.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string
}