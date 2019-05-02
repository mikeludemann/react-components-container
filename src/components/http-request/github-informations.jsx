import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Github_Informations extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: null,
			error: ""
		}
	}

	componentDidMount(){
	axios
		.get("https://api.github.com/users/" + this.props.username)
		.then(res => { 

			this.setState({ data: res.data });

			const tableInfo = document.getElementById("main--table");
			const tableStatus = document.getElementById("status--table");

			var infos = "";
			var status = "";

			const dataObject = JSON.stringify(this.state.data, null);
			const dataJSON = JSON.parse(dataObject);

			infos += "<tr><th>Options</th><th>Information</th></tr>";

			for (var x in dataJSON) {
				infos += "<tr><td>" + x + "</td><td>" + dataJSON[x] + "</td></tr>";
			}

			tableInfo.innerHTML = infos;

			status += "<table><tr><th>Options</th><th>Information</th></tr><tr><td>Status</td><td>" + res.status + "</td></tr></table>";

			tableStatus.innerHTML = status;

		})
		.catch(error => {
			this.setState({ error: error });
			console.log(this.state.error);
		});
	}

	render() {
		return (
			<div id="container">
				<div id="main">
					<table id="main--table"></table>
				</div>
				<div id="status">
					<table id="status--table"></table>
				</div>
			</div>
		)
	}
}

Github_Informations.propTypes = {
	username: PropTypes.string.isRequired
}

/**
 * Axios - Install via npm
 */