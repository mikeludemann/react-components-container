import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Facebook extends Component {
    render() {
        return (
            <div id="facebook--container">
                <div id="fb-root"></div>
                <div class="fb-post" data-href={this.props.postURL} data-show-text="true"></div>
            </div>
        );
    }
}

Facebook.propTypes = {
    postURL: PropTypes.string.isRequired
}

/**
 * Facebook SDK - <head></head>
 * 
 * <script>
 * (function(d, s, id) {
 * var js, fjs = d.getElementsByTagName(s)[0];
 * if (d.getElementById(id)) return;
 * js = d.createElement(s); js.id = id;
 * js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.1';
 * fjs.parentNode.insertBefore(js, fjs);
 * }(document, 'script', 'facebook-jssdk'));
 * </script>
 */

// ------------------------------------------------------------------------------------

export default class FacebookMessenger extends Component {

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
            <div id="facebookMessenger">
                <a href={"https://m.me/" + this.props.username} target="_blank">
                    <div>
                        <i class="fab fa-facebook-messenger fa-2x">{this.props.text}</i>
                    </div>
                </a>
            </div>
        )
    }
}

FacebookMessenger.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string
}