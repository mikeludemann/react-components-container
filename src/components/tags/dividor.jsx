import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dividor extends Component {

    handleOrientation() {

        if (this.props.orientation == "vertical") {

            return (
                <hr id="vertical" className={this.props.elementClass} style={vertical} />
            );

        } else if (this.props.orientation == "horizontal") {

            return (
                <hr id="horizontal" className={this.props.elementClass} style={horizontal} />
            );

        } else {

            return (
                <hr className={this.props.elementClass} />
            );

        }

    }

    render() {

        const vertical = {
            transform: 'rotate(90deg)'
        };

        const horizontal = {
            transform: 'rotate(0deg)'
        };

        return (

            <div className={this.props.containerClass}>
                {this.handleOrientation()}
            </div>

        );

    }

}

Dividor.propTypes = {
    containerClass: PropTypes.string,
    elementClass: PropTypes.string,
    orientation: PropTypes.oneOf(["", "vertical", "horizontal"])
}