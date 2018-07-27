import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Person extends Component {

    render() {
        return (
            <div className={this.props.containerClass}>
                {this.props.persons.map((field) => {
                    return <div className={this.props.elementClass}>
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName">{field.secondName}</span>
                        <span className="lastName">{field.lastName}</span>
                    </div>
                })}
            </div>
        );
    }
}

Person.propTypes = {
    containerClass: PropTypes.string,
    elementClass: PropTypes.string,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export class PersonWithHeadline extends Component {
    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.headlineClass}>
                    {this.props.headline}
                </div>
                {this.props.persons.map((field) => {
                    return <div className={this.props.elementClass}>
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName">{field.secondName}</span>
                        <span className="lastName">{field.lastName}</span>
                    </div>
                })}
            </div>
        );
    }
}

PersonWithHeadline.propTypes = {
    containerClass: PropTypes.string,
    headlineClass: PropTypes.string,
    elementClass: PropTypes.string,
    headline: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export class PersonWithHeadlineAndMail extends Component {
    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.headlineClass}>
                    {this.props.headline}
                </div>
                {this.props.persons.map((field) => {
                    return <div className={this.props.elementClass}>
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName">{field.secondName}</span>
                        <span className="lastName">{field.lastName}</span>
                        <span className="mail"><a href={'mailto:' + field.mail}>{field.mail}</a></span>
                    </div>
                })}
            </div>
        );
    }
}

PersonWithHeadlineAndMail.propTypes = {
    containerClass: PropTypes.string,
    headlineClass: PropTypes.string,
    elementClass: PropTypes.string,
    headline: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            mail: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}