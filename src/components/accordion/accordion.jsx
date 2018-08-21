import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class simpleAccordion extends Component {

    componentDidMount() {

        var acc = document.getElementsByClassName("accordion--headline");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {

                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

    }

    render() {

        const containerAccordion = {
            transition: "0.4s"
        }

        const accordionHeadline = {
            backgroundColor: "#eee",
            color: "#444",
            cursor: "pointer",
            padding: "20px",
            width: "100%",
            border: "none",
            textAlign: "left",
            outline: "none",
            fontSize: "15px",
            transition: "1s"
        }

        const accordionPanel = {
            padding: "10px",
            backgroundColor: "white",
            display: "none",
            overflow: "hidden",
            transition: "max-height 0.5s ease-out",
            border: "0.5px solid #000",
            borderTop: "0px solid #000"
        }

        return (
            <div class="container--accordion" style={containerAccordion}>
                <div class="accordion--headline" style={accordionHeadline}>{this.props.headline}</div>
                <div class="accordion--panel" style={accordionPanel}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

simpleAccordion.propTypes = {
    headline: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}