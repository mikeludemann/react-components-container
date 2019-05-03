import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
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
			<div className="card--product" style={card}>
				<div className="image--product" style={container}>
					<img src={imageurl} alt={imagetext} style={image}/>
				</div>
				<div className="title--product" style={container}>
					<p className="title" style={title}>{this.props.producttitle}</p>
				</div>
				<div className="price--product" style={container}>
					<p>{this.props.price}</p>
				</div>
				<div className="add--product" onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
					<div style={button}>
						<a href="#" style={link}>Add to Cart</a>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	imageurl: PropTypes.string.isRequired,
	imagetext: PropTypes.string.isRequired,
	producttitle: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
}
