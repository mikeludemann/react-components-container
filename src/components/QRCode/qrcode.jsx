import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QRCode extends Component {
    componentDidMount() {
        var image = document.createElement("img");

        var url = "https://chart.googleapis.com/chart?cht=qr&chs=" + this.props.width + "x" + this.props.height + "&chl=" + this.props.data + "&choe=" + this.props.encoding + "&chld=" + this.props.correction;

        image.setAttribute("src", url);

        document.getElementById(this.props.id).appendChild(image);
    }

    render() {
        return (
            <div id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

QRCode.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    encoding: PropTypes.oneOf(["UTF-8","Shift_JIS","ISO-8859-1"]).isRequired,
    correction: PropTypes.oneOf(["L","M","H","Q"]).isRequired,
}