import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navi extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/person'>Persons</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navi
