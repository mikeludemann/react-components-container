import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageOverlay extends Component {
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
            fontSize: this.props.textsize + "px",
            color: this.props.color,
            backgroundColor: this.props.bgcolor,
            borderRadius: this.props.borderradius + "%"
        };

        const main = {
            position: "absolute",
            width: this.props.size + "px",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
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
            borderRadius: this.props.borderradius + "%"
        };

        const icon = {
            color: "white",
            fontSize: (this.props.size / 4) + "px",
            position: "absolute",
            top: "50%",
            left: "50%",
            height: this.props.size + "%",
            width: this.props.size + "%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
        };

        return (
            <div className={this.props.class} style={container} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
                <div className="main" style={main}>
                    {this.props.text}
                </div>
                <div className="overlay" style={overlay}>
                    <img src={this.props.image} alt={this.props.alttext} className="icon" style={icon} />
                </div>
            </div>
        );
    }
}

ImageOverlay.propTypes = {
    firstname: PropTypes.string.isRequired,
    secondname: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    class: PropTypes.string,
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    borderradius: PropTypes.string,
    size: PropTypes.string.isRequired,
    textsize: PropTypes.string,
    image: PropTypes.string.isRequired,
    alttext: PropTypes.string,
}