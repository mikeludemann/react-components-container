import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class TooltipsTop extends Component {
    render() {
        return (
            <div class="tooltip">
                <div class="tooltip-text">
                    {this.props.defaultText}
                </div>
                <div class="tooltip-text-top">
                    {this.props.tooltipsText}
                </div>
            </div>
        );
    }
}

TooltipsTop.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipsBottom extends Component {
    render() {
        return (
            <div class="tooltip">
                <div class="tooltip-text">
                    {this.props.defaultText}
                </div>
                <div class="tooltip-text-top">
                    {this.props.tooltipsText}
                </div>
            </div>
        );
    }
}

TooltipsBottom.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipsRight extends Component {
    render() {
        return (
            <div class="tooltip">
                <div class="tooltip-text">
                    {this.props.defaultText}
                </div>
                <div class="tooltip-text-right">
                    {this.props.tooltipsText}
                </div>
            </div>
        );
    }
}

TooltipsRight.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipsLeft extends Component {
    render() {
        return (
            <div class="tooltip">
                <div class="tooltip-text">
                    {this.props.defaultText}
                </div>
                <div class="tooltip-text-left">
                    {this.props.tooltipsText}
                </div>
            </div>
        );
    }
}

TooltipsLeft.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}