import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class PopoverTop extends Component {
    render() {
        return (
            <div class="popover">
                <div class="popover-text">
                    {this.props.defaultText}
                </div>
                <div class="popover-text-top">
                    {this.props.popoverText}
                </div>
            </div>
        );
    }
}

PopoverTop.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popoverText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopoverBottom extends Component {
    render() {
        return (
            <div class="popover">
                <div class="popover-text">
                    {this.props.defaultText}
                </div>
                <div class="popover-text-top">
                    {this.props.popoverText}
                </div>
            </div>
        );
    }
}

PopoverBottom.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popoverText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopoverRight extends Component {
    render() {
        return (
            <div class="popover">
                <div class="popover-text">
                    {this.props.defaultText}
                </div>
                <div class="popover-text-right">
                    {this.props.popoverText}
                </div>
            </div>
        );
    }
}

PopoverRight.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popoverText: PropTypes.string.isRequired
}

// -----------------------------------------

export default class PopoverLeft extends Component {
    render() {
        return (
            <div class="popover">
                <div class="popover-text">
                    {this.props.defaultText}
                </div>
                <div class="popover-text-left">
                    {this.props.popoverText}
                </div>
            </div>
        );
    }
}

PopoverLeft.propTypes = {
    defaultText: PropTypes.string.isRequired,
    popoverText: PropTypes.string.isRequired
}