import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropup extends Component { 

	constructor(props) {
		super(props)
		this.state = { 
			hover: false,
			hoverTwo: false,
			hoverThree: false
		}
	}

	handleVisible() {
		this.setState({ hover: true })
	}

	handleNotVisible() {
		this.setState({ hover: false })
	}

	handleVisibleTwo() {
		this.setState({ hoverTwo: true })
	}

	handleNotVisibleTwo() {
		this.setState({ hoverTwo: false })
	}

	handleVisibleThree() {
		this.setState({ hoverThree: true })
	}

	handleNotVisibleThree() {
		this.setState({ hoverThree: false })
	}

	render() {
		const dropbtn = {
			backgroundColor: this.state.hover ? '#2980B9' : '#3498DB',
            color: 'white',
            padding: '5px',
            width: '100px',
            border: 'none'
		};
        const dropup = {
			position: 'relative',
			display: 'block'
		};
        const dropup_content = {
			display: this.state.hover ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			bottom: '25px',
			zIndex: '1'
		};
        const dropup_content_sub = {
			display: this.state.hoverTwo ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			bottom: '0px',
			left: '100px',
			zIndex: '1'
		};
        const dropup_content_sub_next = {
			display: this.state.hoverThree ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			bottom: '0px',
			left: '100px',
			zIndex: '1'
		};
		const link = {
			color: 'black',
			padding: '5px',
			textDecoration: 'none',
			display: 'block'
		};

		return (
			<div className="dropup" style={dropup} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
				<button className="dropbtn" style={dropbtn}>{this.props.textbutton}</button>
				<div className="dropup-content" style={dropup_content}>
					<div className="dropup-sub" style={dropup} onMouseOver={this.handleVisibleTwo.bind(this)} onMouseOut={this.handleNotVisibleTwo.bind(this)}>
						<a href="#" style={link}>Link 1</a>
						<div className="dropup-content-sub" style={dropup_content_sub}>
							<div className="dropup-sub" style={dropup} onMouseOver={this.handleVisibleThree.bind(this)} onMouseOut={this.handleNotVisibleThree.bind(this)}>
								<a href="#" style={link}>Link 1.1</a>
								<div className="dropup-content-sub" style={dropup_content_sub_next}>
									<a href="#" style={link}>Link 1.1.1</a>
									<a href="#" style={link}>Link 1.1.2</a>
									<a href="#" style={link}>Link 1.1.3</a>
								</div>
							</div>
							<a href="#" style={link}>Link 1.2</a>
							<a href="#" style={link}>Link 1.3</a>
						</div>
					</div>
					<a href="#" style={link}>Link 2</a>
					<a href="#" style={link}>Link 3</a>
				</div>
		    </div>
		)
	}
}

Dropup.propTypes = {
	textbutton: PropTypes.string.isRequired
}
