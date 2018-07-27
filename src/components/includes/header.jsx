import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (
            <header className={this.props.className}>
                {this.props.children}
            </header>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired
}