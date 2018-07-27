import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Frame extends Component {

    render(){

        return(

            <iframe 
                className={this.props.mainClass}
                src={this.props.url}
                width={this.props.width}
                height={this.props.height}
                srcdoc={this.props.srcdoc}
                sandbox={this.props.sandbox}
            >
            </iframe>

        );

    }

}

Frame.propTypes = {
    mainClass: PropTypes.string,
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    srcdoc: PropTypes.string,
    sandbox: PropTypes.oneOf(["","allow-forms","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts","allow-top-navigation"])
}