import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
    componentDidMount() {

        var select = document.getElementById(this.props.id);

        if (this.props.autofocus == "true") {

            select.setAttribute("autofocus", "");

        } else {

            select.removeAttribute("autofocus", "");

        }

        if (this.props.disabled == "true") {

            select.setAttribute("disabled", "");

        } else {

            select.removeAttribute("disabled", "");

        }

        if (this.props.multiple == "true") {

            select.setAttribute("multiple", "");

        } else {

            select.removeAttribute("multiple", "");

        }

        if (this.props.required == "true") {

            select.setAttribute("required", "");

        } else {

            select.removeAttribute("required", "");

        }

    }

    render() {
        return (
            <select
                id={this.props.id}
                name={this.props.name}
                form={this.props.formID}
                size={this.props.size}
            >
                {this.props.children}
            </select>
        )
    }
}

Select.propTypes = {
    disabled: PropTypes.oneOf(["", "true", "false"]),
    autofocus: PropTypes.oneOf(["", "true", "false"]),
    multiple: PropTypes.oneOf(["", "true", "false"]),
    required: PropTypes.oneOf(["", "true", "false"]),
    id: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    formID: PropTypes.string
}

// ------------------------------------------------------------------

export default class Optgroup extends Component {
    componentDidMount() {

        var optgroup = document.getElementById(this.props.id);

        if (this.props.disabled == "true") {

            optgroup.setAttribute("disabled", "");

        } else {

            optgroup.removeAttribute("disabled", "");

        }

    }

    render() {
        return (
            <optgroup
                id={this.props.id}
                label={this.props.label}
            >
                {this.props.children}
            </optgroup>
        )
    }
}

Optgroup.propTypes = {
    disabled: PropTypes.oneOf(["", "true", "false"]),
    id: PropTypes.string,
    label: PropTypes.string
}

// ------------------------------------------------------------------

export default class Option extends Component {
    componentDidMount() {

        var option = document.getElementById(this.props.id);

        if (this.props.disabled == "true") {

            option.setAttribute("disabled", "");

        } else {

            option.removeAttribute("disabled", "");

        }

        if (this.props.selected == "true") {

            option.setAttribute("selected", "");

        } else {

            option.removeAttribute("selected", "");

        }

    }

    render() {
        return (
            <option
                id={this.props.id}
                label={this.props.label}
                value={this.props.value}
            >
                {this.props.children}
            </option>
        )
    }
}

Option.propTypes = {
    disabled: PropTypes.oneOf(["", "true", "false"]),
    selected: PropTypes.oneOf(["", "true", "false"]),
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string
}

// ------------------------------------------------------------------