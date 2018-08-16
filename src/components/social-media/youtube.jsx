import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class YoutubeVideo extends Component {
    render() {
        return (
            <iframe 
                src={"https://www.youtube.com/embed/" + this.props.videoID} 
                width={this.props.width} 
                height={this.props.height} 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
            >
            </iframe>
        );
    }
}

YoutubeVideo.propTypes = {
    videoID: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}

// ------------------------------------------------------------------------------------

export default class YoutubeVideoList extends Component {
    render() {
        return (
            <iframe 
                src={"https://www.youtube.com/embed/videoseries?list=" + this.props.videoListID} 
                width={this.props.width} 
                height={this.props.height} 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
            >
            </iframe>
        );
    }
}

YoutubeVideoList.propTypes = {
    videoListID: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}