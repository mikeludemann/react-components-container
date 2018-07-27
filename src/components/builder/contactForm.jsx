import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {

    constructor(props) {

        super(props);

    }

    handleSalutation() {
        if (this.props.salutation != "" || this.props.salutation != null) {
            return (
                <span className="salutation">{this.props.salutation + " "}</span>
            );
        }
    }

    handleTitle() {
        if (this.props.title != "" || this.props.title != null) {
            return (
                <span className="title">{this.props.title}</span>
            );
        }
    }

    handleSecondName() {
        if (this.props.secondName != "" || this.props.secondName != null) {
            return (
                <span className="secondName">{this.props.secondName}</span>
            );
        }
    }

    handleCountry() {
        if (this.props.country != "" || this.props.country != null) {
            return (
                <div className="contact--information--country">
                    <span className="country">{this.props.country}</span>
                </div>
            );
        }
    }

    handleContact() {
        if ((this.props.telephone != "" || this.props.telephone != null) || (this.props.telefax != "" || this.props.telefax != null) || (this.props.email != "" || this.props.email != null) || (this.props.homepage != "" || this.props.homepage != null)) {

            return (
                <div className="contact--information--forms">
                    {this.handleTelephone()}
                    {this.handleTelefax()}
                    {this.handleEmail()}
                    {this.handleHomepage()}
                </div>
            );
        }
    }

    handleTelephone() {
        if (this.props.telephone != "" || this.props.telephone != null) {
            return (
                <div className="telephone">{this.props.telephone}</div>
            );
        }
    }

    handleTelefax() {
        if (this.props.telefax != "" || this.props.telefax != null) {
            return (
                <div className="telefax">{this.props.telefax}</div>
            );
        }
    }

    handleEmail() {
        if (this.props.email != "" || this.props.email != null) {
            return (
                <div className="email"><a href={"mailto:" + this.props.email}>{this.props.email}</a></div>
            );
        }
    }

    handleHomepage() {
        if (this.props.homepage != "" || this.props.homepage != null) {
            return (
                <div className="homepage"><a href={"http://" + this.props.homepage}>{this.props.homepage}</a></div>
            );
        }
    }

    render() {
        return (
            <div className="contact--container">
                <div className="contact--information--person">
                    {this.handleSalutation()}
                    {this.handleTitle()}
                    <span className="fullName">
                        <span className="firstName">{this.props.firstName}</span>
                        {this.handleSecondName()}
                        <span className="lastName">{this.props.lastName}</span>
                    </span>
                </div>
                <div className="contact--information--street">
                    <span className="street">{this.props.street}</span>
                    <span className="streetNumber">{this.props.streetNumber}</span>
                </div>
                <div className="contact--information--place">
                    <span className="postalcode">{this.props.postalcode}</span>
                    <span className="place">{this.props.place}</span>
                </div>
                {this.handleCountry()}
                {this.handleContact()}
            </div>
        );
    }
}

ContactForm.propTypes = {
    salutation: PropTypes.oneOf(["Mr.", "Mrs.", "Ms."]),
    title: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    streetNumber: PropTypes.string.isRequired,
    postalcode: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    country: PropTypes.string,
    telephone: PropTypes.string,
    telefax: PropTypes.string,
    email: PropTypes.string,
    homepage: PropTypes.string
}