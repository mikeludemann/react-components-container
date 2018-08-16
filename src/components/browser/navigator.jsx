import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigator extends Component {
    render() {
        return (
            <div id="navigator">
                {this.props.children}
            </div>
        )
    }
}

Navigator.propTypes = {
    children: PropTypes.element.isRequired
}

// ----------------------------------------------------------------------------------

export default class BrowserVersion extends Component {

    componentDidMount() {

        var browserVersion = document.getElementById("browserVersion"),
            x = "Browser Version: " + navigator.appVersion;

        browserVersion.innerHTML = x;

    }

    render() {
        return (
            <div id="browserVersion"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserCodeName extends Component {

    componentDidMount() {

        var browserCodeName = document.getElementById("browserCodeName"),
            x = "Browser Code Version: " + navigator.appCodeName;

        browserCodeName.innerHTML = x;

    }

    render() {
        return (
            <div id="browserCodeName"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserName extends Component {

    componentDidMount() {

        var browserName = document.getElementById("browserName"),
            x = "Browser Name: " + navigator.appName;

        browserName.innerHTML = x;

    }

    render() {
        return (
            <div id="browserName"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserCookieEnabled extends Component {

    componentDidMount() {

        var cookieEnabled = document.getElementById("cookieEnabled"),
            x = "Browser Cookie Available: " + navigator.cookieEnabled;

        cookieEnabled.innerHTML = x;

    }

    render() {
        return (
            <div id="cookieEnabled"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserLanguage extends Component {

    componentDidMount() {

        var language = document.getElementById("language"),
            x = "Browser Language: " + navigator.language;

        language.innerHTML = x;

    }

    render() {
        return (
            <div id="language"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserOnline extends Component {

    componentDidMount() {

        var onLine = document.getElementById("onLine"),
            x = "Browser Online: " + navigator.onLine;

        onLine.innerHTML = x;

    }

    render() {
        return (
            <div id="onLine"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserPlatform extends Component {

    componentDidMount() {

        var platform = document.getElementById("platform"),
            x = "Browser Platform: " + navigator.platform;

        platform.innerHTML = x;

    }

    render() {
        return (
            <div id="platform"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserProduct extends Component {

    componentDidMount() {

        var product = document.getElementById("product"),
            x = "Browser Product: " + navigator.product;

        product.innerHTML = x;

    }

    render() {
        return (
            <div id="product"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserGeolocation extends Component {

    componentDidMount() {

        var geolocation = document.getElementById("geolocation"),
            x = "";

        if (navigator.geolocation) {

            x += "Browser Geolocation is supported and available";

        } else {

            x += "Browser Geolocation is not supported and not available";

        }

        geolocation.innerHTML = x;

    }

    render() {
        return (
            <div id="geolocation"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserUserAgent extends Component {

    componentDidMount() {

        var userAgent = document.getElementById("userAgent"),
            x = "User Agent: " + navigator.userAgent;

        userAgent.innerHTML = x;

    }

    render() {
        return (
            <div id="userAgent"></div>
        )
    }
}

// ----------------------------------------------------------------------------------

export default class BrowserContains extends Component {

    componentDidMount() {

        var contains = document.getElementById("contains"),
            x = "";

        if (typeof text === string && text != "") {

            if (navigator.userAgent.indexOf(text) > -1) {

                x += "Value is available";

                return true;

            } else {

                x += "Value is not available";

                return false

            }

        } else {

            x += "The value is not a string or is empty.";

        }

        contains.innerHTML = x;

    }

    render() {
        return (
            <div id="contains"></div>
        )
    }
}