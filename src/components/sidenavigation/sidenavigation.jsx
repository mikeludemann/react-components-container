import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sidenavigation extends Component { 
	render() {
		return (
			<div id={this.props.id} class="sidenavigation">
				{this.props.lists.map((list) => {
					return <div className="list">
						<a
							href={list.url}
							key={list.id}
						>
						{list.text}
					    </a>
					</div>;
				})}
			</div>
		)
	}
}

Sidenavigation.propTypes = {
    id: PropTypes.string.isRequired,
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}
