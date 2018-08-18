import React, { Component } from 'react';
import PropTypes from 'prop-types';

var btn = {
    position: "fixed",
    bottom: "2%",
    right: "5%",
    padding: "15px",
    backgroundColor: "#888"
}

var topArrow = {
    padding: "5px",
    borderTop: "4px solid #fff",
    borderLeft: "4px solid #fff",
    transform: "rotate(45deg) translate(15%, 15%)",
}

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        function runScroll() {
            scrollTo(document.body, 0, 600);
        }

        var scrollme;

        scrollme = document.querySelector("#top");
        scrollme.addEventListener("click", runScroll, false)

        function scrollTo(element, to, duration) {

            if (duration <= 0) return;

            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function () {

                element.scrollTop = element.scrollTop + perTick;

                if (element.scrollTop == to) return;

                scrollTo(element, to, duration - 10);

            }, 10);

        }

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

                document.getElementById("top").style.display = "block";

            } else {

                document.getElementById("top").style.display = "none";

            }
            
        }

    }

    render() {
        return (
            <div id="top" style={btn}>
                <div style={topArrow}></div>
            </div>
        )
    }
}