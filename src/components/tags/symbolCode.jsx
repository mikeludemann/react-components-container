import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class Symbol extends Component {

    handleCode() {

        if (this.props.codeFormat == 'decimal') {
            return (
                <span>{'&#' + this.props.code + ';'}</span>
            );
        } else if (this.props.codeFormat == 'hexadecimal') {
            return (
                <span>{'&#x' + this.props.code + ';'}</span>
            );
        } else if (this.props.codeFormat == 'entity') {
            return (
                <span>{'&' + this.props.code + ';'}</span>
            );
        }

    }

    render() {
        return (
            <div className={this.props.mainClass}>
                {this.handleCode()}
            </div>
        );
    }
}

Symbol.propTypes = {
    mainClass: PropTypes.string,
    codeFormat: PropTypes.oneOf(["entity", "decimal", "hexadecimal"]).isRequired,
    code: PropTypes.string.isRequired
}