import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CustomNotification extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

		var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://use.fontawesome.com/releases/v5.8.1/css/all.css");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("integrity", "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf");

    document.getElementsByTagName("head").item(0).appendChild(link);

    var style = document.createElement('style');
    style.type = 'text/css';

    let styling =
    ` 
    .notification {
      padding: 15px 0px 15px 15px;
      background-color: #fff;
      color: #000;
      opacity: 1;
      transition: opacity 0.6s;
      max-width: 400px;
      min-width: 250px;
      max-height: auto;
      left: 50%;
      display: table;
      position: absolute;
      border: 0.25px solid #000;
    }

    .closebtn {
      margin-left: 15px;
      color: white;
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 50%;
      cursor: pointer;
      transition: 0.3s;
    }

    .closebtn:hover {
      color: white;
    }

    .notification > .notification--container > .close > .closebtn,
    .notification > .notification--container > .close > .closebtn:hover {
      color: #000;
    }

    .notification.info {
      background-color: #2196F3;
      color: #fff;
    }

    .notification.success {
      background-color: #4CAF50;
      color: #fff;
    }

    .notification.warning {
      background-color: #ff9800;
      color: #fff;
    }

    .notification.danger {
      background-color: #f44336;
      color: #fff;
    }

    .notification.info > .notification--container > .close > .closebtn,
    .notification.info > .notification--container > .close > .closebtn:hover,
    .notification.success > .notification--container > .close > .closebtn,
    .notification.success > .notification--container > .close > .closebtn:hover,
    .notification.warning > .notification--container > .close > .closebtn,
    .notification.warning > .notification--container > .close > .closebtn:hover,
    .notification.danger > .notification--container > .close > .closebtn,
    .notification.danger > .notification--container > .close > .closebtn:hover {
      color: #fff;
    }

    .notification--container {
      display: table-row;
    }

    .notification--container > div {
      display: table-cell;
    }

    .icon {
      width: 5%;
      top: 30%;
      position: absolute;
    }

    .context {
      width: 80%;
      padding-left: 20px;
    }

    .close {
      width: 5%;
      top: 35%;
      right: 2.5%;
      position: absolute;
    }
    `

    style.innerHTML = styling;
    document.getElementsByTagName('head')[0].appendChild(style);

    var mainNotification = document.getElementById("notification--custom");
    var headline = document.getElementById("headline");
    var contentText = document.getElementById("text");
    var icon = document.getElementsByClassName("icon")[0];
    var close = document.getElementsByClassName("close")[0];
      
    var d = new Date();
    var dt = d.toLocaleString();
    document.getElementById("timestamp").innerHTML = dt;

    if(this.props.position == "bottom"){

      mainNotification.style.bottom = "0%";
      mainNotification.style.transform = "translate(-50%, 0%)";

    } else if(this.props.position == "top"){

      mainNotification.style.top = "0%";
      mainNotification.style.transform = "translate(-50%, 0%)";

    } else if(this.props.position == "middle"){

      mainNotification.style.top = "50%";
      mainNotification.style.transform = "translate(-50%, -50%)";

    }

    if(this.props.type == "success"){

      mainNotification.className += " success";
      headline.innerHTML = "Success!";
      contentText.innerHTML = this.props.text || "Indicates a successful or positive action.";
      icon.children[0].className += " fa-check-circle";

    } else if(this.props.type == "warning"){

      mainNotification.className += " warning";
      headline.innerHTML = "Warning!";
      contentText.innerHTML = this.props.text || "Indicates a warning that might need attention.";
      icon.children[0].className += " fa-exclamation-triangle";

    } else if(this.props.type == "info"){

      mainNotification.className += " info";
      headline.innerHTML = "Info!";
      contentText.innerHTML = this.props.text || "Indicates a neutral informative change or action.";
      icon.children[0].className += " fa-info-circle";

    } else if(this.props.type == "danger"){

      mainNotification.className += " danger";
      headline.innerHTML = "Danger!";
      contentText.innerHTML = this.props.text || "Indicates a dangerous or potentially negative action.";
      icon.children[0].className += " fa-exclamation-circle";

    } else if(this.props.type == "default"){

      mainNotification.className += "";
      headline.innerHTML = "Default!";
      contentText.innerHTML = this.props.text || "Indicates a default action.";
      icon.children[0].className += " fa-info-circle";

    } else {

      mainNotification.className += "";
      headline.innerHTML = "Default!";
      contentText.innerHTML = this.props.text || "Indicates a default action.";
      icon.children[0].className += " fa-info-circle";

    }

    close.addEventListener("click", function(){
      var div = this.parentElement.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ 
        div.style.display = "none"; 
      }, 600);
    })

	}

	render() {
		return (
			<div id="notification--custom" class="notification">
        <div class="notification--container">
          <div class="icon">
            <i class="fa-2x fas"></i>
          </div> 
          <div class="context">
            <strong id="headline"></strong><br/>
            <span id="text"></span><br/>
            <span id="timestamp"></span>
          </div>
          <div class="close">
            <span class="closebtn"><i class="fas fa-times fa-lg"></i></span>
          </div>
        </div>
      </div>
		);
	}
}

CustomNotification.propTypes = {
	position: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}
