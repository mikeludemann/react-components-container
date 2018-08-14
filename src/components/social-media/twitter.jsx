import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Twitter extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        var js = document.createElement("script");
        js.setAttribute("src", "https://platform.twitter.com/widgets.js");
        js.setAttribute("async", "true");
        js.setAttribute("charset", "utf-8");
        document.getElementsByTagName("head").item(0).appendChild(js);

    }

    render() {
        return (
            <a
                class={"twitter-" + this.props.style}
                href={"http://twitter.com/" + this.props.twitterID}
            >
                Tweets by {this.props.twitterID}
            </a>
        )
    }
}

Twitter.propTypes = {
    twitterID: PropTypes.string.isRequired,
    style: PropTypes.oneOf(["grid", "timeline"]).isRequired
}