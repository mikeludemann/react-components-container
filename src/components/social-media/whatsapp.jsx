import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WhatsApp extends Component {

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
            <div id="whatsapp">
                <a href={"https://api.whatsapp.com/send?phone=" + this.props.tel + "&text=" + this.props.text + "&source=" + this.props.source + "&data=" + this.props.data} target="_blank">
                    <div>
                        <i class="fab fa-whatsapp fa-2x">{this.props.defaultText}</i>
                    </div>
                </a>
            </div>
        )
    }
}


WhatsApp.propTypes = {
    tel: PropTypes.string.isRequired,
    text: PropTypes.string,
    source: PropTypes.string,
    data: PropTypes.string,
    defaultText: PropTypes.string
}