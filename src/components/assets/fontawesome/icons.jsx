import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {

    componentDidMount() {

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
        link.setAttribute("crossorigin", "anonymous");
        link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

        document.getElementsByTagName("head").item(0).appendChild(link);

    }

    render() {
        return (
            <i class={this.props.class}></i>
        )
    }
}

Icon.propTypes = {
    class: PropTypes.string.isRequired
}