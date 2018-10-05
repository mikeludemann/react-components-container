import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Popup extends React.Component {

    componentDidMount() {

        var popup = document.getElementsByClassName("popup");

        for (var i = 0; i < popup.length; i++) {

            popup[i].onclick = togglePopup(i);

        }

        function togglePopup(i) {

            return function () {

                if (popup[i].children[1].style.display == "none") {

                    popup[i].children[1].style.display = "block";

                } else {

                    popup[i].children[1].style.display = "none";

                }

            };

        }

    }

    render() {
        return (
            <div class="popup">
                <div class="popup-text">
                    {this.props.defaultText}
                </div>
                <div class={"popup-text-" + this.props.position}>
                    {this.props.popupsText}
                </div>
            </div>
        );
    }
}

Popup.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["top","left","right","bottom"]).isRequired
}

// -----------------------------------------

export default class PopupTop extends React.Component {

    componentDidMount() {

        var popup = document.getElementsByClassName("popup");

        for (var i = 0; i < popup.length; i++) {

            popup[i].onclick = togglePopup(i);

        }

        function togglePopup(i) {

            return function () {

                if (popup[i].children[1].style.display == "none") {

                    popup[i].children[1].style.display = "block";

                } else {

                    popup[i].children[1].style.display = "none";

                }

            };

        }

    }

    render() {
        return (
            <div class="popup">
                <div class="popup-text">
                    {this.props.defaultText}
                </div>
                <div class="popup-text-top">
                    {this.props.popupsText}
                </div>
            </div>
        );
    }
}

PopupTop.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupBottom extends React.Component {

    componentDidMount() {

        var popup = document.getElementsByClassName("popup");

        for (var i = 0; i < popup.length; i++) {

            popup[i].onclick = togglePopup(i);

        }

        function togglePopup(i) {

            return function () {

                if (popup[i].children[1].style.display == "none") {

                    popup[i].children[1].style.display = "block";

                } else {

                    popup[i].children[1].style.display = "none";

                }

            };

        }

    }

    render() {
        return (
            <div class="popup">
                <div class="popup-text">
                    {this.props.defaultText}
                </div>
                <div class="popup-text-bottom">
                    {this.props.popupsText}
                </div>
            </div>
        );
    }
}

PopupBottom.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupRight extends React.Component {

    componentDidMount() {

        var popup = document.getElementsByClassName("popup");

        for (var i = 0; i < popup.length; i++) {

            popup[i].onclick = togglePopup(i);

        }

        function togglePopup(i) {

            return function () {

                if (popup[i].children[1].style.display == "none") {

                    popup[i].children[1].style.display = "block";

                } else {

                    popup[i].children[1].style.display = "none";

                }

            };

        }

    }

    render() {
        return (
            <div class="popup">
                <div class="popup-text">
                    {this.props.defaultText}
                </div>
                <div class="popup-text-right">
                    {this.props.popupsText}
                </div>
            </div>
        );
    }
}

PopupRight.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupLeft extends React.Component {

    componentDidMount() {

        var popup = document.getElementsByClassName("popup");

        for (var i = 0; i < popup.length; i++) {

            popup[i].onclick = togglePopup(i);

        }

        function togglePopup(i) {

            return function () {

                if (popup[i].children[1].style.display == "none") {

                    popup[i].children[1].style.display = "block";

                } else {

                    popup[i].children[1].style.display = "none";

                }

            };

        }

    }

    render() {
        return (
            <div class="popup">
                <div class="popup-text">
                    {this.props.defaultText}
                </div>
                <div class="popup-text-left">
                    {this.props.popupsText}
                </div>
            </div>
        );
    }
}

PopupLeft.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------