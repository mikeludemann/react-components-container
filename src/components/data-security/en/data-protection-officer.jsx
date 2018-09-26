import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class data_protection_officer extends Component {
    render() {
        return (
            <div>
                <h2>Data protection officer</h2>
                <h3>Statutory data protection officer</h3>
                <p>We have appointed a data protection officer for our company.</p>
                <p>{this.props.firstname} {this.props.lastname}
                <br /> {this.props.street} {this.props.streetnumber}
                <br /> {this.props.postalcode} {this.props.city}</p>
                <p>Telephone: {this.props.telephone}
                <br /> Email: {this.props.email}</p>
            </div>
        );
    }
}

data_protection_officer.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    streetnumber: PropTypes.string.isRequired,
    postalcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}