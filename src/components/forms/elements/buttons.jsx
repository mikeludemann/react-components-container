import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

    componentDidMount() {

        var btn = document.getElementById(this.props.id);

        if (this.props.autofocus == "true") {

            btn.setAttribute("autofocus", "");

        } else {

            btn.removeAttribute("autofocus", "");

        }

        if(this.props.disabled == "true"){
    
            btn.setAttribute("disabled","");
          
        } else {
        
            btn.removeAttribute("disabled","");
          
        }

        if(this.props.formNovalidate == "true"){
    
            btn.setAttribute("formnovalidate","");
          
        } else {
        
            btn.removeAttribute("formNovalidate","");
          
        }

    }

    render() {
        return (
            <button
                id={this.props.id}
                className={this.props.class}
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                form={this.props.formID}
                formaction={this.props.formAction}
                formenctype={this.props.formEnctype}
                formmethod={this.props.formMethod}
            >
                {this.props.text}
            </button>
        )
    }

}

Button.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string,
    type: PropTypes.oneOf(["button", "reset", "submit"]).isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.oneOf(["", "true", "false"]),
    autofocus: PropTypes.oneOf(["", "true", "false"]),
    text: PropTypes.string.isRequired,
    formID: PropTypes.string,
    formAction: PropTypes.string,
    formEnctype: PropTypes.oneOf(["","application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]),
    formMethod: PropTypes.oneOf(["","get", "post"]),
    formNovalidate: PropTypes.oneOf(["", "true", "false"])
}