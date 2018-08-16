import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Video extends Component {
    render() {

        const title = this.props.title ? this.props.title : this.props.src;

        return (
            <div className={this.props.className}>
                <video
                    controls={this.props.controls}
                    poster={this.props.poster}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    autoPlay={this.props.autoPlay}
                    preload={this.props.preload}
                    id={this.props.id}
                    title={title}
                >
                    {this.props.videos.map((field) => {
                        return <source src={field.videoSource} type={field.type} />
                    })}
                    {this.props.tracks.map((field) => {
                        return <track src={field.trackSource} kind={field.kind} srclang={field.languageSource} label={field.label} />
                    })}
                    {this.props.notSupportedText}
                </video>
            </div>
        );
    }
}

Video.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.bool,
    poster: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string,
    title: PropTypes.string,
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            videoSource: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
            trackSource: PropTypes.string.isRequired,
            kind: PropTypes.string.isRequired,
            languageSource: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    notSupportedText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class Audio extends Component {
    render() {

        const title = this.props.title ? this.props.title : this.props.src;

        return (
            <div className={this.props.className}>
                <audio
                    controls={this.props.controls}
                    crossOrigin={this.props.crossOrigin}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    autoPlay={this.props.autoPlay}
                    preload={this.props.preload}
                    id={this.props.id}
                    title={title}
                >
                    {this.props.audios.map((field) => {
                        return <source src={field.audioSource} type={field.type} />
                    })}
                    {this.props.notSupportedText}
                </audio>
            </div>
        );
    }
}

Audio.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.bool,
    crossOrigin: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string,
    title: PropTypes.string,
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            audioSource: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    notSupportedText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class Embed extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <embed src={this.props.source} type={this.props.type} />
            </div>
        );
    }
}

Embed.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    type: PropTypes.string
}

// -----------------------------------------

export default class Object extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <object data={this.props.source} type={this.props.type} name={this.props.name}>
                    {this.props.params.map((field) => {
                        return <param name={field.name} value={field.value} />
                    })}
                </object>
            </div>
        );
    }
}

Object.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    params: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ),
}