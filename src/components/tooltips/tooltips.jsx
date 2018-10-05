import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Tooltip extends Component {
    render() {
        return (
            <div class="tooltip">
                <div class="tooltip-text">
                    {this.props.defaultText}
                </div>
                <div class={"tooltip-text-" + this.props.position}>
                    {this.props.tooltipsText}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["top","left","right","bottom"]).isRequired
}

// -----------------------------------------

export default class TooltipTop extends Component {
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

TooltipTop.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipBottom extends Component {
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

TooltipBottom.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipRight extends Component {
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

TooltipRight.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class TooltipLeft extends Component {
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

TooltipLeft.propTypes = {
    defaultText: PropTypes.string.isRequired,
    tooltipsText: PropTypes.string.isRequired
}