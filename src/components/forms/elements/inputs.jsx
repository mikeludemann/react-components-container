import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputWithHeadline extends Component {
    render() {
        return (
            <div className={this.props.mainClass}>
                {this.props.fields.map((field) => {
                    return <div className={this.props.containerClass}>
                        <div className={this.props.headlineClass}>
                            <label for={field.id}>{field.headline}</label>
                        </div>
                        <div className={this.props.inputClass}>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                            />
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

InputWithHeadline.propTypes = {
    mainClass: PropTypes.string,
    containerClass: PropTypes.string,
    headlineClass: PropTypes.string,
    inputClass: PropTypes.string,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            headline: PropTypes.string,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class Inputs extends Component {
    render() {
        return (
            <div className="form--element">
                {this.props.fields.map((field) => {
                    return <div className="input--container">
                        <div className="input--container--field">
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                            />
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

Inputs.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class Input extends Component {
    render() {
        return (
            <div className="form--element">
                <div className="input--container">
                    <div className="input--container--field">
                        <input
                            type={this.props.type}
                            id={this.props.id}
                            name={this.props.name}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

// -----------------------------------------

export default class InputWithDataList extends Component {
    render() {
        return (
            <div className="form--element">
                {this.props.fields.map((field) => {
                    return <div className="input--container">
                        <div className="input--container--field">
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                                list={this.props.datalistID}
                            />
                        </div>
                    </div>
                })}
                <datalist id={this.props.datalistID}>
                    {this.props.datalists.map((field) => {
                        return <option value={field.value} />
                    })}
                </datalist>
            </div>
        );
    }
}

InputWithDataList.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired,
    datalistID: PropTypes.string.isRequired,
    datalists: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}

// -----------------------------------------

export default class Textarea extends Component {
    render() {
        return (
            <div className="form--element">
                <div className="textarea--element">
                    <textarea
                        maxlength={this.props.maxlength}
                        name={this.props.name}
                        rows={this.props.rows}
                        cols={this.props.cols}
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        autofocus={this.props.autofocus}
                    />
                </div>
            </div>
        );
    }
}

Textarea.propTypes = {
    maxlength: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
}