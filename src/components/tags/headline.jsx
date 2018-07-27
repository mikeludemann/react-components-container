import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class Headline extends Component {

    handleHeadline() {

        if (this.props.size == '1') {
            return (
                <h1>{this.props.text}</h1>
            );
        } else if (this.props.size == '2') {
            return (
                <h2>{this.props.text}</h2>
            );
        } else if (this.props.size == '3') {
            return (
                <h3>{this.props.text}</h3>
            );
        } else if (this.props.size == '4') {
            return (
                <h4>{this.props.text}</h4>
            );
        } else if (this.props.size == '5') {
            return (
                <h5>{this.props.text}</h5>
            );
        } else if (this.props.size == '6') {
            return (
                <h6>{this.props.text}</h6>
            );
        }

    }

    render() {
        return (
            <div className={this.props.mainClass}>
                {this.handleHeadline()}
            </div>
        );
    }
}

Headline.propTypes = {
    mainClass: PropTypes.string,
    size: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
    text: PropTypes.string.isRequired
}