import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GooglePlus extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        var js = document.createElement("script");
        js.setAttribute("type", "text/javascript");
        js.setAttribute("src", "https://apis.google.com/js/platform.js");
        js.setAttribute("async", "true");
        js.setAttribute("defer", "true");
        js.setAttribute("charset", "utf-8");
        document.getElementsByTagName("head").item(0).appendChild(js);

    }

    render() {
        return (
            <div class="g-post" data-href={"https://plus.google.com/" + this.props.googlePlusID + "/posts/" + this.props.postID}></div>
        )
    }
}

GooglePlus.propTypes = {
    googlePlusID: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired
}