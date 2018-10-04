import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoadingSpinner extends Component {

    componentDidMount() {

        var style = document.createElement('style');
        style.type = 'text/css';

        let keyframes =
        `
      	@-webkit-keyframes spin {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `

        style.innerHTML = keyframes;
        document.getElementsByTagName('head')[0].appendChild(style);

    }

    render() {

        const loading = {
            width: this.props.size + "px",
            height: this.props.size + "px",
            border: "5px solid " + this.props.bgcolor,
            borderRadius: "50%",
            borderTop: "5px solid " + this.props.color,
            webkitAnimation: "spin 2s linear infinite",
            animation: "spin 2s linear infinite"
        };

        const places = {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: (-1 * (this.props.size / 2)) + "px",
            marginLeft: (-1 * (this.props.size / 2)) + "px"
        };

        const distance = {
            paddingTop: "10px",
            textAlign: "center",
            marginLeft: "-5px"
        };

        return (
            <div id={this.props.id} style={places}>
                <div className={this.props.class} style={loading}></div>
                <div className="text" style={distance}>{this.props.text}</div>
            </div>
        );
    }

}

LoadingSpinner.propTypes = {
    id: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    text: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    bgcolor: PropTypes.string
}