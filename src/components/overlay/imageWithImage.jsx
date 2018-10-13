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
            borderRadius: this.props.borderradius + "%"
        };

        const main = {
            position: "relative",
            width: this.props.size + "px",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            borderRadius: this.props.borderradius + "%"
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
            position: "absolute",
            top: "50%",
            left: "50%",
            height: this.props.size + "%",
            width: this.props.size + "%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
        };


        const mainicon = {
            position: "relative",
            top: "50%",
            left: "50%",
            height: this.props.size + "%",
            width: this.props.size + "%",
            transform: "translate(-50%, 0%)",
            textAlign: "center"
        };

        return (
            <div className={this.props.class} style={container} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
                <div className="main" style={main}>
                    <img src={this.props.mainimage} alt={this.props.mainalttext} className="icon-main" style={mainicon} />
                </div>
                <div className="overlay" style={overlay}>
                    <img src={this.props.image} alt={this.props.alttext} className="icon" style={icon} />
                </div>
            </div>
        );
    }
}

ImageOverlay.propTypes = {
    class: PropTypes.string,
    borderradius: PropTypes.string,
    size: PropTypes.string.isRequired,
    mainimage: PropTypes.string.isRequired,
    mainalttext: PropTypes.string,
    image: PropTypes.string.isRequired,
    alttext: PropTypes.string,
}