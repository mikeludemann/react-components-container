import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {

    render() {

        return (

            <div className="text">
                {this.props.children}
            </div>

        );

    }

}

Text.propTypes = {
    children: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TextContent extends Component {

    render() {

        return (

            <div className="text--content">
                {this.props.children}
            </div>

        );

    }

}

TextContent.propTypes = {
    children: PropTypes.element.isRequired
}