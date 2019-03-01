import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component { 

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
        const dropdown = {
			position: 'relative',
			display: 'block'
		};
        const dropdown_content = {
			display: this.state.hover ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			top: '25px',
			zIndex: '1'
		};
        const dropdown_content_sub = {
			display: this.state.hoverTwo ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			top: '0px',
			left: '100px',
			zIndex: '1'
		};
        const dropdown_content_sub_next = {
			display: this.state.hoverThree ? 'block' : 'none',
			position: 'absolute',
			backgroundColor: '#f1f1f1',
			width: '100px',
			top: '0px',
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
			<div className="dropdown" style={dropdown} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>
				<button className="dropbtn" style={dropbtn}>{this.props.textbutton}</button>
				<div className="dropdown-content" style={dropdown_content}>
					<div className="dropdown-sub" style={dropdown} onMouseOver={this.handleVisibleTwo.bind(this)} onMouseOut={this.handleNotVisibleTwo.bind(this)}>
						<a href="#" style={link}>Link 1</a>
						<div className="dropdown-content-sub" style={dropdown_content_sub}>
							<div className="dropdown-sub" style={dropdown} onMouseOver={this.handleVisibleThree.bind(this)} onMouseOut={this.handleNotVisibleThree.bind(this)}>
								<a href="#" style={link}>Link 1.1</a>
								<div className="dropdown-content-sub" style={dropdown_content_sub_next}>
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

Dropdown.propTypes = {
	textbutton: PropTypes.string.isRequired
}
