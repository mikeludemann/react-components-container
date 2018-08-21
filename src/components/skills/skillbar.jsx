import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Skillbar extends Component {
    render() {
        const container = {
            width: "100%",
            backgroundColor: "#eee"
        }
        const skillLevel = {
            textAlign: "right",
            padding: "10px",
            color: "white",
            backgroundColor: this.props.bgColor,
            width: this.props.width + "%"
        }
        return (
            <div class="container">
                <div>{this.props.text}</div>
                <div class="container" style={container}>
                    <div class="skill--level" style={skillLevel}>{this.props.width + "%"}</div>
                </div>
            </div>
        )
    }
}

Skillbar.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
}