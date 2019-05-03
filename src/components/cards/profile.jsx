import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = { isHover: false }
	}

	handleVisible() {
		this.setState({ isHover: true })
	}

	handleNotVisible() {
		this.setState({ isHover: false })
	}

	render() {

		const container = {
			margin: "10px 0px"
		};

		const image = {
			width: "100%"
		};

		const link = {
			color: "#fff",
			textDecoration: "none"
		};

		const title = {
			color: "#999",
			fontSize: "18px"
		};

		const card = {
			boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
			maxWidth: "300px",
			margin: "auto",
			textAlign: "center",
			position: "relative"
		};

		const button = {
			border: "none",
			outline: "0",
			display: "inline-block",
			padding: "10px 0px",
			color: "#fff",
			backgroundColor: "#000",
			textAlign: "center",
			cursor: "pointer",
			width: "100%",
			fontSize: "18px",
			opacity: this.isHover ? '0.7' : '1.0',
			transition: "all 1s ease-in-out"
		};

		return (
			<div className="card--profile" style={card}>
				<div className="image--profile" style={container}>
					<img src={imageurl} alt={imagetext} style={image}/>
				</div>
				<div className="fullname--profile" style={container}>
					<h1>{this.props.firstname + " " + this.props.lastname}</h1>
				</div>
				<div className="jobtitle--profile" style={container}>
					<p className="title" style={title}>{this.props.jobtitle}</p>
				</div>
				<div className="employer--profile" style={container}>
					<p>{this.props.employer}</p>
				</div>
				<div className="contact--profile" onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
					<div style={button}>
						<a href={"mailto:" + this.props.email} style={link}>Contact</a>
					</div>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	email: PropTypes.string,
	imageurl: PropTypes.string.isRequired,
	imagetext: PropTypes.string.isRequired,
	jobtitle: PropTypes.string,
	employer: PropTypes.string,
}
