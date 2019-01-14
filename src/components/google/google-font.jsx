import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleFont extends Component {

    componentDidMount() {

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://fonts.googleapis.com/css?family=" + this.font);

        document.getElementsByTagName("head").item(0).appendChild(link);

    }

}

GoogleFont.propTypes = {
    font: PropTypes.string.isRequired
}