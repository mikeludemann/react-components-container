import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleRecaptcha extends Component {

    componentDidMount() {

        var script = document.createElement("script");

        script.setAttribute("src", "https://www.google.com/recaptcha/api.js");
        script.setAttribute("async", "true");
        script.setAttribute("defer", "true");

        document.getElementsByTagName("head").item(0).appendChild(script);

        document.getElementsByClassName("g-recaptcha")[0].setAttribute("data-sitekey", this.props.code);

    }

    render() {
        return (
            <div class="g-recaptcha"></div>
        )
    }

}

GoogleRecaptcha.propTypes = {
    code: PropTypes.string.isRequired
}