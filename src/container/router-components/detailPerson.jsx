import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PersonAPI from './../../api/person'

class DetailPerson extends Component {
    constructor(props) {
        super(props);
    }

	render() {

        const person = PersonAPI.get( parseInt(this.props.match.params.id, 10) );

        if (!person) {
            return <div>Sorry, but the person was not found</div>
        }

		return (
			<div>
                <h1>{person.name} (#{person.id})</h1>
                <h2>Gender: {person.gender}</h2>
                <Link to='/person'>Back</Link>
            </div>
		)
    }
}

export default DetailPerson
