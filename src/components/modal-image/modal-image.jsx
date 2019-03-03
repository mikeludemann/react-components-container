import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalImage extends Component {

	componentDidMount() {

		var modal = document.getElementById('modal-image-container');
		var body = document.getElementsByTagName('body')[0];

		var container = document.getElementById(this.props.id);
		var close = document.getElementById("close");

		container.onclick = function(){

			modal.style.display = "block";
			body.style.overflow = "hidden";
			modal.children[1].src = this.children[0].src;
			modal.children[2].innerHTML = this.children[0].alt;

		}

		close.onclick = function() { 

			modal.style.display = "none";
			body.style.overflow = '';

		}

		var dw = document || window;

		dw.addEventListener("click", function (event) {

			if (event.target == modal) {

				modal.style.display = "none";
				body.style.overflow = '';

			}

		});
	}

	render() {
		return (
			<div className="main-container">
				<div id={this.props.id} className="main-container">
					<img src={this.props.url} alt={this.props.alttext}/>
				</div>
				<div id="modal-image-container" className="modal">
					<span id="close" className="modal-close">&times;</span>
					<img className="modal-content"/>
					<div className="modal-text"></div>
				</div>
			</div>
		)
    }

}

ModalImage.propTypes = {
	id: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	alttext: PropTypes.string.isRequired,
}
