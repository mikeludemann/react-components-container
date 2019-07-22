import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchFilter extends Component {

	constructor(props) {

		super(props)

		this.state = {

			defaultValues: [
				"Apples",
				"Broccoli",
				"Tomatos",
				"Milk",
				"Eggs",
				"Water",
				"Granola",
				"Bananas",
				"Smoothie",
				"Salat",
				"Yogurt"
			],
			values: []

		}

		this.filterList = this.filterList.bind(this);

	}

	filterList(event){

		var getUpdateList = this.state.defaultValues;

		getUpdateList = getUpdateList.filter(function(item){

			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;

		});

		this.setState({values: getUpdateList});

	}

	componentWillMount(){

		this.setState({values: this.state.defaultValues})

	}

	render(){

		const searchFilterList = {
			padding: "20px",
			maxWidth: "200px",
			margin: "auto"
		};

		const textField = {
			lineHeight: "2",
			fontSize: "16px",
			height: "auto",
			paddingLeft: "20px",
			width: "94%",
			marginBottom: "5px"
		};

		return (
			<div className="search--filter--list" style={searchFilterList}>
				<input type="text" placeholder="Search" onChange={this.filterList} style={textField}/>
				<List values={this.state.values}/>
			</div>
		);

	}

}

SearchFilter.propTypes = {}

// #################################################

export default class List extends Component {

	render(){

		const listContainer = {
			margin: "0"
		};

		const listElements = {
			listStyle: "none",
			border: "1px solid #ccc",
			marginTop: "-1px",
			lineHeight: "2",
			padding: "5px 0px 5px 20px",
			background: "#fff",
			width: "95%"
		};

		return (
      <ul style={listContainer}>
        {this.props.values.map(function(item) {
          return <li style={listElements} key={item}>{item}</li>
        })}
      </ul>
		);

	}

}

List.propTypes = {
  values: PropTypes.object.isRequired
}
