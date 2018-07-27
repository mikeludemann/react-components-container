import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return (
            <footer className={this.props.className}>
                {this.props.children}
            </footer>
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired
}