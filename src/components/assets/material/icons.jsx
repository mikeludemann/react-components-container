import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {

    componentDidMount() {

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons");

        document.getElementsByTagName("head").item(0).appendChild(link);

    }

    render() {
        return (
            <i class="material-icons">{this.props.element}</i>
        )
    }
}

Icon.propTypes = {
    element: PropTypes.string.isRequired
}