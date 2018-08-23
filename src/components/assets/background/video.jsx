import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VideoBackground extends Component {
    componentDidMount() {

        var video = document.createElement("video");

        video.setAttribute("id", this.props.id);

        if (this.props.autoplay == true) {

            video.setAttribute("autoplay", "");

        } else {

            video.removeAttribute("autoplay", "");

        }

        if (this.props.controls == true) {

            video.setAttribute("controls", "");

        } else {

            video.removeAttribute("controls", "");

        }

        if (this.props.preload != true || this.props.preload != false || this.props.preload != "" || this.props.preload != "none") {

            video.setAttribute("preload", this.props.preload);

        } else {

            video.removeAttribute("preload", "");

        }

        if (this.props.poster != true || this.props.poster != false || this.props.poster != "" || this.props.poster != "none") {

            video.setAttribute("poster", this.props.poster);

        } else {

            video.removeAttribute("poster", "");

        }

        if (this.props.muted == true) {

            video.setAttribute("muted", "");

        } else {

            video.removeAttribute("muted", "");

        }

        if (this.props.loop == true) {

            video.setAttribute("loop", "");

        } else {

            video.removeAttribute("loop", "");

        }

        if (this.props.crossOrigin != "" || this.props.crossOrigin != "none" || this.props.crossOrigin != true || this.props.crossOrigin != false) {

            video.setAttribute("crossOrigin", this.props.crossOrigin);

        } else {

            video.removeAttribute("crossOrigin", "");

        }

        if (this.props.notSupportedText != "" || this.props.notSupportedText != "none" || this.props.notSupportedText != true || this.props.notSupportedText != false) {

            video.appendChild(this.props.notSupportedText);

        } else {

            video.appendChild("");

        }

        if (this.props.mpeg != "" || this.props.mpeg != "none") {

            video.appendChild("<source src=" + this.props.mpeg + " type='video/mpeg'>");

        } else {

            video.appendChild("");

        }

        if (this.props.mp4 != "" || this.props.mp4 != "none") {

            video.appendChild("<source src=" + this.props.mp4 + " type='video/mp4'>");

        } else {

            video.appendChild("");

        }

        if (this.props.webm != "" || this.props.webm != "none") {

            video.appendChild("<source src=" + this.props.webm + " type='video/webm'>");

        } else {

            video.appendChild("");

        }

        if (this.props.ogg != "" || this.props.ogg != "none") {

            video.appendChild("<source src=" + this.props.ogg + " type='video/ogg'>");

        } else {

            video.appendChild("");

        }

        if (this.props.wav != "" || this.props.wav != "none") {

            video.appendChild("<source src=" + this.props.wav + " type='video/wav'>");

        } else {

            video.appendChild("");

        }

        if (this.props.quicktime != "" || this.props.quicktime != "none") {

            video.appendChild("<source src=" + this.props.quicktime + " type='video/quicktime'>");

        } else {

            video.appendChild("");

        }

        if (this.props.x_msvideo != "" || this.props.x_msvideo != "none") {

            video.appendChild("<source src=" + this.props.x_msvideo + " type='video/x_msvideo'>");

        } else {

            video.appendChild("");

        }

        if (this.props.m4v != "" || this.props.m4v != "none") {

            video.appendChild("<source src=" + this.props.m4v + " type='application/octet-stream'>");

        } else {

            video.appendChild("");

        }

        if (this.props.rtf != "" || this.props.rtf != "none") {

            video.appendChild("<source src=" + this.props.rtf + " type='application/rtf'>");

        } else {

            video.appendChild("");

        }

        if (this.props.track == true) {

            video.appendChild("<track src=" + this.props.trackSrc + " kind=" + this.props.trackKind + " srclang=" + this.props.trackSrcLang + " label=" + this.props.trackLabel + ">");

        } else {

            video.appendChild("");

        }

        document.getElementById("videoBackground").appendChild(video);

    }

    render() {
        return (
            <div id="videoBackground" className={this.props.class}>

            </div>
        )
    }
}

VideoBackground.propTypes = {
    class: PropTypes.string,
    controls: PropTypes.bool,
    crossOrigin: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string.isRequired,
    mpeg: PropTypes.string,
    mp4: PropTypes.string,
    webm: PropTypes.string,
    ogg: PropTypes.string,
    wav: PropTypes.string,
    quicktime: PropTypes.string,
    x_msvideo: PropTypes.string,
    rft: PropTypes.string,
    m4v: PropTypes.string,
    track: PropTypes.bool,
    trackSrc: PropTypes.string,
    trackKind: PropTypes.string,
    trackSrcLang: PropTypes.string,
    trackLabel: PropTypes.string,
    notSupportedText: PropTypes.string.isRequired
}