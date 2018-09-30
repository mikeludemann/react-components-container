import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComingSoon extends Component {

    componentDidMount() {

        function countdownTimer(element, date, time, expiredText) {

            'use strict';

            var setCountdown;

            if (time == null || time == "") {

                setCountdown = new Date(date).getTime();

            } else if ((date != null || date != "") && (time != null || time != "")) {

                setCountdown = new Date(date + "T" + time + "Z").getTime();

            } else {

                console.log("Date and/or time format is wrong!");

            }

            var x = setInterval(function () {

                var now = new Date().getTime();

                var distance = setCountdown - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var daysText,
                    hoursText,
                    minutesText,
                    secondsText;

                if (days == 1) { daysText = " day " } else { daysText = " days " }
                if (hours == 1) { hoursText = " hour " } else { hoursText = " hours " }
                if (minutes == 1) { minutesText = " minute " } else { minutesText = " minutes " }
                if (seconds == 1) { secondsText = " second " } else { secondsText = " seconds " }

                var elementExist = document.getElementById(element);

                if (distance < 0) {

                    clearInterval(x);

                    if (expiredText == "" || expiredText == null) {

                        elementExist.innerHTML = "0" + daysText + "0" + hoursText + "0" + minutesText + "0" + secondsText;

                    } else {

                        elementExist.innerHTML = expiredText;

                    }

                } else {

                    elementExist.innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + secondsText;

                }

            }, 1000);

        }

        window.onload = countdownTimer(this.props.id, this.props.date, this.props.time, this.props.expiredText);

    }

    render() {

        const container = {
            width: '100%',
            height: '100%',
            color: this.props.color,
            backgroundColor: this.props.backgroundColor,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: this.props.backgroundImage,
            position: 'absolute'
        };

        const middle = {
            left: '50%',
            top: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        };

        const headline = {
            paddingBottom: '10px',
        };

        const partingLine = {
            width: '100%',
            height: '5px',
            backgroundColor: '#fff',
            margin: 'auto'
        };

        const countdown = {
            marginTop: '20px'
        };

        const simpleText = {
            left: '50%',
            bottom: '0',
            paddingTop: '20px',
            position: 'relative',
            transform: 'translateX(-50%)'
        };

        return (
            <div className="container" style={container}>
                <div className="middle" style={middle}>
                    <div className="headline" style={headline}>
                        <h1>
                            {this.props.title}
                        </h1>
                    </div>
                    <hr className="parting-line" style={partingLine} />
                    <div className="countdown" style={countdown}>
                        <div id={this.props.id}></div>
                    </div>
                    <div className="text-middle" style={simpleText}>
                        {this.props.extraText}
                    </div>
                </div>
            </div>
        )
    }
}

ComingSoon.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string,
    expiredText: PropTypes.string,
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    extraText: PropTypes.string
}