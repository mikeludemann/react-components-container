import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LegalForm extends Component {
    render() {
        return (
            <div className="legalForm--container">
                <div className="legalForm--headline">
                    {this.props.headline}
                </div>
                <div className="legalForm--commercial--register">
                    <span className="register--title">{this.props.registerTitle}</span><br />
                    <span className="register">{this.props.registerForm}</span>
                </div>
                <div className="legalForm--vat--identification--number">
                    <span className="vat--title">{this.props.vatTitle}</span><br />
                    <span className="vat">{this.props.vatForm}</span>
                </div>
                <div className="legalForm--tax">
                    <span className="tax--title">{this.props.taxTitle}</span><br />
                    <span className="tax">{this.props.tax}</span>
                </div>
                <div className="legalForm--law">
                    <span className="law--title">{this.props.lawTitle}</span><br />
                    <span className="law">{this.props.lawName}</span>
                </div>
            </div>
        );
    }
}

LegalForm.propTypes = {
    headline: PropTypes.string,
    registerTitle: PropTypes.string.isRequired,
    registerForm: PropTypes.string.isRequired,
    vatTitle: PropTypes.string.isRequired,
    vatForm: PropTypes.string.isRequired,
    taxTitle: PropTypes.string.isRequired,
    taxForm: PropTypes.string.isRequired,
    lawTitle: PropTypes.string.isRequired,
    lawName: PropTypes.string.isRequired
}