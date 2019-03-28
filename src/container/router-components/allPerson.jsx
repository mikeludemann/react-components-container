import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PersonAPI from './../../api/person'

class AllPerson extends Component {
	render() {
		return (
			<div>
				<ul>
					{
						PersonAPI.all().map(p => (
							<li key={p.id}>
								<Link to={`/person/${p.id}`}>{p.name}</Link>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}

export default AllPerson
