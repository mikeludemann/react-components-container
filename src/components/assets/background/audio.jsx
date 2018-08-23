import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AudioBackground extends Component {
    componentDidMount() {

        var audio = document.createElement("audio");

        audio.setAttribute("id", this.props.id);

        if (this.props.autoplay == true) {

            audio.setAttribute("autoplay", "");

        } else {

            audio.removeAttribute("autoplay", "");

        }

        if (this.props.controls == true) {

            audio.setAttribute("controls", "");

        } else {

            audio.removeAttribute("controls", "");

        }

        if (this.props.preload != true || this.props.preload != false || this.props.preload != "" || this.props.preload != "none") {

            audio.setAttribute("preload", this.props.preload);

        } else {

            audio.removeAttribute("preload", "");

        }

        if (this.props.muted == true) {

            audio.setAttribute("muted", "");

        } else {

            audio.removeAttribute("muted", "");

        }

        if (this.props.loop == true) {

            audio.setAttribute("loop", "");

        } else {

            audio.removeAttribute("loop", "");

        }

        if (this.props.volume != "" || this.props.volume != "none") {

            audio.setAttribute("volume", this.props.volume);

        } else {

            audio.removeAttribute("volume", "");

        }

        if (this.props.crossOrigin != "" || this.props.crossOrigin != "none" || this.props.crossOrigin != true || this.props.crossOrigin != false) {

            audio.setAttribute("crossOrigin", this.props.crossOrigin);

        } else {

            audio.removeAttribute("crossOrigin", "");

        }

        if (this.props.notSupportedText != "" || this.props.notSupportedText != "none" || this.props.notSupportedText != true || this.props.notSupportedText != false) {

            audio.appendChild(this.props.notSupportedText);

        } else {

            audio.appendChild("");

        }

        if (this.props.mpeg != "" || this.props.mpeg != "none") {

            audio.appendChild("<source src=" + this.props.mpeg + " type='audio/mpeg'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.mp4 != "" || this.props.mp4 != "none") {

            audio.appendChild("<source src=" + this.props.mp4 + " type='audio/mp4'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.webm != "" || this.props.webm != "none") {

            audio.appendChild("<source src=" + this.props.webm + " type='audio/webm'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.wav != "" || this.props.wav != "none") {

            audio.appendChild("<source src=" + this.props.wav + " type='audio/wav'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.ogg != "" || this.props.ogg != "none") {

            audio.appendChild("<source src=" + this.props.ogg + " type='audio/ogg'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.flac != "" || this.props.flac != "none") {

            audio.appendChild("<source src=" + this.props.flac + " type='audio/flac'>");

        } else {

            audio.appendChild("");

        }

        if (this.props.track == true) {

            audio.appendChild("<track src=" + this.props.trackSrc + " kind=" + this.props.trackKind + " srclang=" + this.props.trackSrcLang + " label=" + this.props.trackLabel + ">");

        } else {

            audio.appendChild("");

        }

        if (this.props.title != "" || this.props.title != "none") {

            audio.setAttribute("title", this.props.title);

        } else {

            audio.removeAttribute("title", "");

        }

        document.getElementById("audioBackground").appendChild(audio);

    }

    render() {
        return (
            <div id="audioBackground" className={this.props.class}>

            </div>
        )
    }
}

AudioBackground.propTypes = {
    class: PropTypes.string,
    controls: PropTypes.bool,
    crossOrigin: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    volume: PropTypes.oneOf(["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"]),
    mpeg: PropTypes.string,
    mp4: PropTypes.string,
    webm: PropTypes.string,
    ogg: PropTypes.string,
    wav: PropTypes.string,
    flac: PropTypes.string,
    track: PropTypes.bool,
    trackSrc: PropTypes.string,
    trackKind: PropTypes.string,
    trackSrcLang: PropTypes.string,
    trackLabel: PropTypes.string,
    notSupportedText: PropTypes.string.isRequired
}