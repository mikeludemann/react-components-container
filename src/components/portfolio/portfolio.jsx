import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Portfolio extends Component { 

	render() {

		const content = {
			backgroundColor: 'white',
			border: '0.5px solid #000',
        };

		const info =  {
            padding: '15px 10px',
        };

		const image = {
            width: '100%',
            /* opacity: 1; */
        };

        const headline = {
            fontSize: '24px',
            paddingBottom: '10px',
        };

        const block = {
            padding: '10px 0px',
        };

		return (
			<div className="content" style={content}>
				<img src={this.props.url} alt={this.props.alttext} style={image}/>
				<div className="info" style={info}>
					<h1 style={headline}>{this.props.headline}</h1>
					<p className="block" style={block}>{this.props.text}</p>
					<p className="block" style={block}>&copy; {this.props.name} - {this.props.year}</p>
				</div>
			</div>
		)
    }

}

Portfolio.propTypes = {
	url: PropTypes.string.isRequired,
	alttext: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired
}
