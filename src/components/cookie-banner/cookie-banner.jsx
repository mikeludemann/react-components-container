import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CookieBanner extends Component {

	componentDidMount() {

		var style = document.createElement('style');
		style.type = 'text/css';

		let styling =
		` 
		@media only screen and (max-width: 768px) {
			.context, .information {
				width: 100%;
			}
		}

		@media only screen and (min-width: 768px) {
			.context {
				width: 88%;
			}

			.information {
				width: 11%;
				float: right;
				margin-top: -42px;
			}
		}
		`

		style.innerHTML = styling;
		document.getElementsByTagName('head')[0].appendChild(style);

		dropCookie = true;
		cookieDuration = this.props.days || 365;
		cookieName = this.props.cookiename;
		cookieValue = this.props.cookievalue;
		cookieMessage = this.props.message || "Wir verwenden Cookies. Bei den Besuch und weiteren Verlauf der Webseite akzeptieren Sie die Berechtigung und Nutzung der Cookies.";
		dataPolicyLink = this.props.dataSecurityLink || "#";
		var expires;

		document.getElementById("close-cookie-banner").addEventListener("click",function(){
			acceptCookie();
		});

		document.getElementById("message").innerHTML = cookieMessage;
		document.getElementById("data-link").setAttribute("href", dataPolicyLink);

		if(this.props.position == "top"){
			document.getElementById("cookie-law").style.top = "0";
		} else if(this.props.position == "bottom"){
			document.getElementById("cookie-law").style.bottom = "0";
		} else {
			document.getElementById("cookie-law").style.top = "0";
		}

		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000)); 
				expires = "; expires="+date.toGMTString(); 
			}
			else {
				expires = "";
			}
			if(window.dropCookie) { 
				document.cookie = name+"="+value+expires+"; path=/"; 
			}
		}

		function createCookieBanner(){
			var main = document.getElementsByTagName('body')[0];
			var cid = document.getElementById('cookie-law');

			main.insertBefore(cid,main.firstChild);

			document.getElementsByTagName('body')[0].className+=' cookiebanner';

			createCookie(window.cookieName,window.cookieValue, window.cookieDuration);
		}

		function checkCookie(name) {
			var validator = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(validator) == 0) return c.substring(validator.length,c.length);
			}
			return null;
		}

		function eraseCookie(name) {
			createCookie(name,"",-1);
		}

		window.onload = function(){
			if(checkCookie(window.cookieName) != window.cookieValue){
				createCookieBanner(); 
			} else {
				console.log(window.cookieName + " - " + window.cookieValue);
			}
		}

		function acceptCookie(){
			var element = document.getElementById('cookie-law');
			element.parentNode.removeChild(element);
		}

	}

	render() {

		const cookielaw = {
			width: "100%",
			background: this.bgcolor || "#000",
			margin: "0px auto",
			borderRadius: "0px",
			webkitBorderRradius: "0px",
			mozBorderRadius: "0px",
			position: "absolute",
			padding: "5px"
		};

		const cookietext = {
			padding: "10px",
			fontSize: "1.1em",
			textAlign: "left",
			color: this.color || "#fff",
			margin: "0"
		};

		const information = {
			margin: "10px",
			width: "100%"
		};

		const datasecurity = {
			padding: "10px"
		};

		const accept = {
			maxWidth: "100px"
		};

		const button = {
			padding: "10px",
			backgroundColor: this.color || "#fff",
			color: this.bgcolor || "#000",
			border: "1px solid #000"
		};

		const link = {
			color: this.color || "#fff"
		};

		return (
			<div id="cookie-law" style={cookielaw}>
				<div class="context">
					<span id="message" style={cookietext}></span>
					<span class="datasecurity" style={datasecurity}>
						<a id="data-link" style={link} rel="nofollow" title="Datenschutzerklärung">Datenschutzerklärung</a>
					</span>
				</div>
				<div class="information" style={information}>
					<div class="accept" style={accept}>
						<a id="close-cookie-banner" href="javascript:void(0);">
							<div class="button" style={button}>Akzeptieren</div>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

CookieBanner.propTypes = {
	days: PropTypes.number.isRequired,
	cookiename: PropTypes.string.isRequired,
	cookievalue: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	dataSecurityLink: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	position: PropTypes.string,
	bgcolor: PropTypes.string
}
