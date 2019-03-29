import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {

	componentDidMount() {

		var link = document.createElement("link");

		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css");
		link.setAttribute("type", "text/css");
		document.getElementsByTagName("head").item(0).appendChild(link);

		var script = document.createElement("script");

		script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.min.js");
		document.getElementsByTagName("head").item(0).appendChild(script);

		var g = document.createElement('script');
		g.type = 'text/javascript';
		g.innerHTML = '$(function(){(function(name){var container=$("#pagination-"+name);var sources=function(){var result=[];var dataElement=' + this.props.elements + ';if(Array.isArray(dataElement)){for(var i=0;i<=dataElement.length-1;i++){result.push(dataElement[i])}}else if(dataElement instanceof Object){Object.keys(dataElement).forEach(function(key){result.push(dataElement[key])})}return result}();var options={dataSource:sources,' + this.props.options + ',callback:function(response,pagination){var dataHtml="<ul>";$.each(response,function(index,item){dataHtml+="<li>"+item+"</li>"});dataHtml+="</ul>";container.prev().html(dataHtml)}};container.pagination(options)})("' + this.props.id + '")})';

		document.getElementsByTagName('body')[0].appendChild(g);

	}

	render() {
		return (
			<div id="wrapper">
				<section>
					<div className="data-container"></div>
					<div id={'pagination-' + this.props.id}></div>
				</section>
			</div>
		)
	}
}

Pagination.propTypes = {
	id: PropTypes.string.isRequired,
	elements: PropTypes.string.isRequired,
	options: PropTypes.string.isRequired
}

/**
	* Prerequisite
	* 
	* Include the following code in your head-Tag
	* 
	* <script src="https://code.jquery.com/jquery-migrate-3.0.0.min.js"></script>
	* <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
*/
