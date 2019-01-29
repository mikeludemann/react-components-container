import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cutout_Text extends Component {

    render() {

        const cutout = {
            backgroundColor: this.props.bgcolor,
            color: this.props.color,
            fontSize: this.props.size + "px",
            margin: "0 auto",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            mixBlendMode: this.props.mode
        }

        return (
            <div class="cutout-text" style={cutout}>
                {this.props.text}
            </div>
        )

    }

}

Cutout_Text.propTypes = {
    text: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(["","multiply","screen"]).isRequired
}