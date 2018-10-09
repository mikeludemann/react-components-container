import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
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

    initialName(firstname, lastname) {
        return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
    }

    componentDidMount() {

        var link = document.createElement("link");

        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
        link.setAttribute("crossorigin", "anonymous");
        link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");
        document.getElementsByTagName("head").item(0).appendChild(link);

        var style = document.createElement('style');
        style.type = 'text/css';

        let styling =
            `        
          .fa-user:hover {
            color: #eee;
          }
          `

        style.innerHTML = styling;
        document.getElementsByTagName('head')[0].appendChild(style);

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
            backgroundColor: this.props.overcolor,
            borderRadius: this.props.borderradius + "%"
        };

        const icon = {
            color: "white",
            fontSize: (this.props.size / 4) + "px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
        };

        return (
            <div className={this.props.class} data-firstname={this.props.firstname} data-secondname={this.props.secondname} data-lastname={this.props.lastname} style={container} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
                <div className="main" style={main}>
                    {this.initialName(this.props.firstname, this.props.lastname)}
                </div>
                <div className="overlay" style={overlay}>
                    <a href={"mailto:" + this.props.email} className="icon" style={icon}>
                        <i class="fa fa-user"></i>
                    </a>
                </div>
            </div>
        );
    }
}

Avatar.propTypes = {
    firstname: PropTypes.string.isRequired,
    secondname: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    class: PropTypes.string,
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    overcolor: PropTypes.string.isRequired,
    borderradius: PropTypes.string,
    size: PropTypes.string.isRequired,
    textsize: PropTypes.string,
}