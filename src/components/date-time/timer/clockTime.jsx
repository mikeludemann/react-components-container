import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClockTime extends Component {

    componentDidMount() {

        var timer = function () {
            var d = new Date();
            var t = d.toLocaleTimeString();
            document.getElementById("clocktime").innerHTML = t;

            setInterval(timer, 1000);
        }

        window.onload = timer();

    }

    render() {
        return (
            <div id="clocktime"></div>
        )
    }
}