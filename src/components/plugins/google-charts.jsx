import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Google_Charts extends Component {

	componentDidMount() {
    
    // eslint-disable-next-line
    const google = window.google = window.google ? window.google : {}

    google.charts.load('current', this.props.settings);
    google.charts.setOnLoadCallback(drawChart);

    var mainOptions = this.props.chartoptions;
    var mainDatas = this.props.datas;

    function drawChart() {

      var data = google.visualization.arrayToDataTable(mainDatas);

      var options = mainOptions;

      var chart = new google.visualization.PieChart(document.getElementById('chart'));

      chart.draw(data, options);
    }

  }

	render(){
		return (
			<div id="chart"></div>
		)
	}
}

Google_Charts.propTypes = {
	settings: PropTypes.object.isRequired,
	chartoptions: PropTypes.object.isRequired,
	datas: PropTypes.array.isRequired
}

// Prerequisite: Script File
// https://www.gstatic.com/charts/loader.js