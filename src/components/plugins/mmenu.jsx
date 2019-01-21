import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MMenu extends Component {
    componentDidMount() {

        var script = document.createElement("script");

        script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.props.version + "/jquery.mmenu.all.js");

        document.getElementsByTagName("head").item(0).appendChild(script);

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.props.version + "/jquery.mmenu.all.css");

        document.getElementsByTagName("head").item(0).appendChild(link);

        var mmenu_options = document.createElement("script");

        if (typeof this.props.options === "undefined") {
            this.props.options = "";
        }

        mmenu_options.innerHTML = 'jQuery(document).ready(function( $ ) { $("#' + this.props.id + '").mmenu(' + this.props.options + '); });';

        document.getElementsByTagName("head").item(0).appendChild(mmenu_options);

    }

    render() {
        return (
            <nav id={this.props.id}>
                {this.props.children}
            </nav>
        )
    }
}

MMenu.propTypes = {
    version: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.string
}