import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class PopupsTop extends React.Component {

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

PopupsTop.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupsBottom extends React.Component {

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

PopupsBottom.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupsRight extends React.Component {

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

PopupsRight.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopupsLeft extends React.Component {

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

PopupsLeft.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popupsText: PropTypes.string.isRequired
}

// -----------------------------------------