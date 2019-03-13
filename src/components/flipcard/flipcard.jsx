import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Flipcard extends Component {

	componentDidMount(){

		var main = document.querySelector('.container');
		var element = document.querySelector('.container__sub');

		if(this.props.rotation == "vertical"){

			if(this.props.eventAction == "hover"){

				main.addEventListener('mouseover', function () {

					element.classList.toggle('flip__vertical');
					main.children[0].children[1].style.transform = "rotateX(180deg)";

				});

			} else if(this.props.eventAction == "click"){

				main.addEventListener('click', function () {

					element.classList.toggle('flip__vertical');
					main.children[0].children[1].style.transform = "rotateX(180deg)";

				});

			}

		} else if (this.props.rotation == "horizontal"){

			if(this.props.eventAction == "hover"){

				main.addEventListener('mouseover', function () {

					element.classList.toggle('flip__horizontal');
					main.children[0].children[1].style.transform = "rotateY(-180deg)";

				});

			} else if(this.props.eventAction == "click"){

				main.addEventListener('click', function () {

					element.classList.toggle('flip__horizontal');
					main.children[0].children[1].style.transform = "rotateY(-180deg)";

				});

			}

		}


		var style = document.createElement('style');
		style.type = 'text/css';

		let styling =
        ` 
        .container {
            border: 1px solid #CCC;
            margin: 10px;
            perspective: 600px;
        }

        .container__sub {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;
            transform-style: preserve-3d;
            transform-origin: center right;
            transition: transform 0.5s;
        }

        .container__sub.flip__vertical {
            transform: translateY(0%) rotateX(-180deg);
        }

        .container__sub.flip__horizontal {
            transform: translateX(-100%) rotateY(180deg);
        }

        .container__sub__face {
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 40px;
            backface-visibility: hidden;
        }
	    `

        style.innerHTML = styling;
        document.getElementsByTagName('head')[0].appendChild(style);

    }

    render() {

        const container = {
            width: this.props.width + "px",
            height: this.props.height + "px",
        };

        const container__sub__face__frontside = {
            background: this.props.frontbgcolor || "#fff",
            color: this.props.frontcolor || "#000",
        };

        const container__sub__face__backside = {
            background: this.props.backbgcolor || "#fff",
            color: this.props.backcolor || "#000",
        };

        return (
            <div className="container" style={container}>
                <div className="container__sub">
                    <div className="container__sub__face container__sub__face--frontside" style={container__sub__face__frontside}>
                        {this.props.frontside}
                    </div>
                    <div className="container__sub__face container__sub__face--backside" style={container__sub__face__backside}>
                        {this.props.backside}
                    </div>
                </div>
        </div>
        )
    }

}

Flipcard.propTypes = {
	frontside: PropTypes.element.isRequired,
    backside: PropTypes.element.isRequired,
    eventAction: PropTypes.oneOf(["click","hover"]).isRequired,
    rotation: PropTypes.oneOf(["vertical","horizontal"]).isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    frontcolor: PropTypes.string.isRequired,
    frontbgcolor: PropTypes.string.isRequired,
    backcolor: PropTypes.string.isRequired,
    backbgcolor: PropTypes.string.isRequired
}
