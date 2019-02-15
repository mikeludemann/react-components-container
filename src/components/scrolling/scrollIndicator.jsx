import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollIndicator extends Component {

	componentDidMount() {

		window.onscroll = function() {
			processScrollIndicator()
		};

		function processScrollIndicator() {
			var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrollPosition = (windowScroll / documentHeight) * 100;
			document.getElementById("scrollIndicator").style.width = scrollPosition + "%";
		}
	}

	render() {

        const main = {
            position: 'fixed',
            top: 0,
            zIndex: 1,
            width: '100%',
            backgroundColor: '#f1f1f1'
        };

        const container = {
            background: this.props.bgcolor,
            height: this.props.height + "px",
            width: '100%'
        };

        const scrollcolor = {
            background: this.props.color,
            height: this.props.height + "px",
            width: '0%'
        };

		return (
			<div class="scroll--indicator--container" style={main}>
                <div class="progress-container" style={container}>
                    <div class="progress-bar" id="scrollIndicator" style={scrollcolor}></div>
                </div> 
            </div>
		)
	}
}

ScrollIndicator.propTypes = {
	height: PropTypes.string.isRequired,
	bgcolor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}
