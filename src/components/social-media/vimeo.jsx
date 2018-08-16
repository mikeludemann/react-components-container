import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Vimeo extends Component {
    render() {
        return (
            <iframe 
                src={"https://player.vimeo.com/video/" + this.props.videoID} 
                width={this.props.width} 
                height={this.props.height} 
                frameborder="0" 
                webkitallowfullscreen mozallowfullscreen allowfullscreen
            >
            </iframe>
        );
    }
}

Vimeo.propTypes = {
    videoID: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}