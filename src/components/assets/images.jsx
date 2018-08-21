import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
    componentDidMount() {
        var image = document.querySelectorAll("img");

        for (var i = 0; i < image.length; i++) {
            if (this.props.filter == "blur") {
                image[i].style.filter = "blur(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "brightness") {
                image[i].style.filter = "brightness(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "contrast") {
                image[i].style.filter = "contrast(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "drop-shadow") {
                image[i].style.filter = "drop-shadow(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "grayscale") {
                image[i].style.filter = "grayscale(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "hue-rotate") {
                image[i].style.filter = "hue-rotate(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "invert") {
                image[i].style.filter = "invert(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "opacity") {
                image[i].style.filter = "opacity(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "saturate") {
                image[i].style.filter = "saturate(" + this.props.filterDimension + ")";
            }
            if (this.props.filter == "sepia") {
                image[i].style.filter = "sepia(" + this.props.filterDimension + ")";
            }
            else {
                image[i].style.filter = "none";
            }
        }
    }
    render() {
        return (
            <div className={this.props.containerClass}>
                {this.props.images.map((field) => {
                    return <img id={field.id} className={field.class} src={field.imageSource} alt={field.defaultText} width={field.width} height={field.height} />
                })}
            </div>
        );
    }
}

Image.propTypes = {
    containerClass: PropTypes.string,
    filter: PropTypes.oneOf(["grayscale", "blur", "brightness", "contrast", "drop-shadow", "hue-rotate", "invert", "opacity", "saturate", "sepia", "none"]),
    filterDimension: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            class: PropTypes.string,
            imageSource: PropTypes.string.isRequired,
            defaultText: PropTypes.string.isRequired,
            width: PropTypes.string,
            height: PropTypes.string
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class MapImage extends Component {
    render() {
        return (
            <div className={this.props.containerClass}>
                <img src={this.props.imageSource} alt={this.props.defaultText} width={this.props.width} height={this.props.height} usemap={'#' + this.props.name} />
                <map name={this.props.name}>
                    {this.props.mapImages.map((field) => {
                        return <area shape={field.form} coords={field.coordination} href={field.urlmap} alt={field.text} />
                    })}
                </map>
            </div>
        );
    }
}

MapImage.propTypes = {
    containerClass: PropTypes.string,
    imageSource: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
    mapImages: PropTypes.arrayOf(
        PropTypes.shape({
            form: PropTypes.string.isRequired,
            coordination: PropTypes.string.isRequired,
            urlmap: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class Picture extends Component {
    render() {
        return (
            <div className={this.props.containerClass}>
                <picture>
                    {this.props.pictures.map((field) => {
                        return <source media={field.mediaSource} srcset={field.settingSource} />
                    })}
                    <img src={this.props.imageSource} alt={this.props.defaultText} />
                </picture>
            </div>
        );
    }
}

Picture.propTypes = {
    containerClass: PropTypes.string,
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            mediaSource: PropTypes.string.isRequired,
            settingSource: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    imageSource: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired
}