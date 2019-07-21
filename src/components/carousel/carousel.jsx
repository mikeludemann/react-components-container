import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyframes } from "styled-components";

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  handleVisible() {
    this.setState({ hover: true })
  }

  handleNotVisible() {
    this.setState({ hover: false })
  }

  prev() {
    slider(defaultIndex -= 1);
  }

  next() {
    slider(defaultIndex += 1);
  }

  resizeViewport(){

    this.setState({

      viewport: {

        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight

      }

    });

  }
  
  componentDidMount(){

    window.addEventListener('resize', this.resizeViewport);

    var defaultIndex = 1;

    slider(defaultIndex);

    function slider(n) {

      var i,
      slides = document.getElementsByClassName("slider--element");
      
      if (n > slides.length) {
        
        defaultIndex = 1;
        
      }    
      
      if (n < 1) {
      
        defaultIndex = slides.length;
      
      }
      
      for (i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";  

      }
      
      slides[defaultIndex-1].style.display = "block"; 
      
    }

  }

  componentWillUnmount(){

    window.removeEventListener('resize', this.resizeViewport);

  }

  render() {

    var mq;

    if (this.state.viewport.width <= 300) {

      mq = {fontSize: '11px'};

    }
    else {

      mq = {fontSize: '18px'};

    }

    const container = {
      maxWidth: "100%",
      position: "relative",
      margin: "auto"
    };

    const next = {
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      width: "auto",
      padding: "16px",
      marginTop: "-22px",
      color: "#fff",
      fontWeight: "bold",
      fontSize: mq,
      transition: "1s ease-in-out",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      right: "0",
      borderRadius: "3px 0 0 3px",
      backgroundColor: this.state.hover ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'
    };

    const prev = {
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      width: "auto",
      padding: "16px",
      marginTop: "-22px",
      color: "#fff",
      fontWeight: "bold",
      fontSize: mq,
      transition: "1s ease-in-out",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      backgroundColor: this.state.hover ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'
    };

    return (
      <div className="container--slider" style={container}>
        {this.props.children}
        <a class="prev" style={prev} onClick={prev} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>&#10094;</a>
        <a class="next" style={next} onClick={next} onMouseOver={this.handleVisible.bind(this)} onMouseOut={this.handleNotVisible.bind(this)}>&#10095;</a>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.element.isRequired
}

// ####################################################

export default class Slides extends Component {

  render() {

    const sliderElement = {
      display: "none"
    };

    var fade = keyframes`
      from {
        opacity: 0.4
      } 
      to {
        opacity: 1
      }
    `;

    const fading = {
      animation: `${fade} 1s`
    };

    return(
      <div className="slider--element fade" style={sliderElement + " " + fading}>
        {this.props.children}
      </div>
    );

  }

}

Slides.propTypes = {
  children: PropTypes.element.isRequired
}