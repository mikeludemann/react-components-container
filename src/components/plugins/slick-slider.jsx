import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Slick_Slider extends Component {
    componentDidMount() {

        var script = document.createElement("script");

        script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.props.version + "/slick.js");

        document.getElementsByTagName("head").item(0).appendChild(script);

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.props.version + "/slick-theme.css");

        document.getElementsByTagName("head").item(0).appendChild(link);

        var link2 = document.createElement("link");

        link2.setAttribute("rel", "stylesheet");
        link2.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.props.version + "/slick.css");

        document.getElementsByTagName("head").item(0).appendChild(link2);

        var slick_options = document.createElement("script");

        if (typeof this.props.options === "undefined") {
            this.props.options = "";
        }

        slick_options.innerHTML = '$(document).ready(function() { $(".' + this.props.element + '").slick(' + this.props.options + '); });';

        document.getElementsByTagName("head").item(0).appendChild(slick_options);

    }

    render() {
        return (
            <div class={this.props.element}>
                {this.props.children}
            </div>
        )
    }
}

Slick_Slider.propTypes = {
    version: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    options: PropTypes.string
}