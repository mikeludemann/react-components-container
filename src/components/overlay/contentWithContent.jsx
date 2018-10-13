import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentOverlay extends Component {
    constructor(props) {
        super(props)
        this.state = { hover: false }
    }

    handleVisible() {
        this.setState({ hover: true })
    }

    handleNotVisible() {
        this.setState({ hover: false })
    }

    render() {

        const container = {
            position: "relative",
            width: this.props.size + "px",
            height: this.props.size + "px",
            borderRadius: this.props.borderradius + "%"
        };

        const main = {
            position: "relative",
            height: this.props.size + "px",
            width: this.props.size + "px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            borderRadius: this.props.borderradius + "%",
            transition: "all 0.3s ease",
            fontSize: this.props.textsize + "px",
            color: this.props.color,
            backgroundColor: this.props.bgcolor,
        };

        const overlay = {
            position: "absolute",
            top: "0%",
            bottom: "0%",
            left: "0%",
            right: "0%",
            height: this.props.size + "px",
            width: this.props.size + "px",
            opacity: this.state.hover ? '1' : '0',
            transition: "all 0.3s ease",
            fontSize: this.props.textsize + "px",
            color: this.props.overcolor,
            backgroundColor: this.props.overbgcolor,
            borderRadius: this.props.borderradius + "%"
        };

        const txt = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
        };

        return (
            <div className={this.props.class} style={container} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
                <div className="main" style={main}>
                    <div style={txt}>{this.props.maintext}</div>
                </div>
                <div className="overlay" style={overlay}>
                    <div style={txt}>{this.props.text}</div>
                </div>
            </div>
        );
    }
}

ContentOverlay.propTypes = {
    class: PropTypes.string,
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    overcolor: PropTypes.string.isRequired,
    overbgcolor: PropTypes.string.isRequired,
    borderradius: PropTypes.string,
    size: PropTypes.string.isRequired,
    textsize: PropTypes.string
}