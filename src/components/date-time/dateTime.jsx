import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Year extends Component {

    componentDidMount() {

        var year = document.getElementById("year"),
            x = new Date().getFullYear();

        year.innerHTML = x;

    }

    render() {
        return (
            <div id="year"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Month extends Component {

    componentDidMount() {

        var month = document.getElementById("month"),
            x = new Date(),
            m = (x.getMonth() + 1);

        if (this.props.format == "number") {

            if (m < 10) {

                m = '0' + m;

                month.innerHTML = m;

            } else {

                month.innerHTML = m;

            }

        }

        if (this.props.format == "text") {

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            month.innerHTML = months[x.getMonth()];

        }

    }

    render() {
        return (
            <div id="month"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Week extends Component {

    componentDidMount() {

        Date.prototype.getWeek = function () {

            var date = new Date(this.getTime());

            date.setHours(0, 0, 0, 0);

            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

            var firstWeek = new Date(date.getFullYear(), 0, 1);

            return 1 + Math.round(((date.getTime() - firstWeek.getTime()) / 86400000 - 3 + (firstWeek.getDay() + 6) % 7) / 7);

        }

        var week = document.getElementById("week");

        week.innerHTML = new Date().getWeek();

    }

    render() {
        return (
            <div id="week"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Day extends Component {

    componentDidMount() {

        var day = document.getElementById("day"),
            x = new Date(),
            d = (x.getDate());

        if (d < 10) {

            d = '0' + d;

            day.innerHTML = d;

        } else {

            day.innerHTML = d;

        }

    }

    render() {
        return (
            <div id="day"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Hour extends Component {

    componentDidMount() {

        var hour = document.getElementById("hour"),
            x = new Date(),
            h = (x.getHours());

        if (h < 10) {

            h = '0' + h;

            hour.innerHTML = h;

        } else {

            hour.innerHTML = h;

        }

    }

    render() {
        return (
            <div id="hour"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Minute extends Component {

    componentDidMount() {

        var minute = document.getElementById("minute"),
            x = new Date(),
            min = (x.getMinutes());

        if (min < 10) {

            min = '0' + min;

            minute.innerHTML = min;

        } else {

            minute.innerHTML = min;

        }

    }

    render() {
        return (
            <div id="minute"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Second extends Component {

    componentDidMount() {

        var second = document.getElementById("second"),
            x = new Date(),
            sec = (x.getSeconds());

        if (sec < 10) {

            sec = '0' + sec;

            second.innerHTML = sec;

        } else {

            second.innerHTML = sec;

        }

    }

    render() {
        return (
            <div id="second"></div>
        )
    }
}

// ------------------------------------------------------------------------------------

export default class Millisecond extends Component {

    componentDidMount() {

        var millisecond = document.getElementById("millisecond"),
            x = new Date(),
            ms = (x.getMilliseconds());

            millisecond.innerHTML = ms;

    }

    render() {
        return (
            <div id="millisecond"></div>
        )
    }
}