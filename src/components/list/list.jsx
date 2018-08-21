import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SortingList extends Component {
    render() {
        const listStyle = {
            listStyleType: 'none',
            paddingLeft: '0px'
        };
        return (
            <ol style={listStyle}>
                {this.props.items.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.text}
                    </li>;
                })}
            </ol>
        );
    }
}

SortingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class UnsortingList extends Component {
    render() {
        const listStyle = {
            listStyleType: 'none',
            paddingLeft: '0px'
        };
        return (
            <ul style={listStyle}>
                {this.props.items.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.text}
                    </li>;
                })}
            </ul>
        );
    }
}

UnsortingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class DirectionList extends Component {
    render() {
        const listStyle = {
            listStyleType: 'none',
            paddingLeft: '0px'
        };
        return (
            <dir style={listStyle}>
                {this.props.items.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.text}
                    </li>;
                })}
            </dir>
        );
    }
}

DirectionList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

// -----------------------------------------

export default class ModernList extends Component {
    render() {
        return (
            <div className="list--container">
                {this.props.items.map((item) => {
                    return <div className="list--container--item">
                        <span className="list--container--item--number">{item.id}</span>
                        <span className="list--container--item--separator">{item.separator}</span>
                        <span className="list--container--item--text">{item.text}</span>
                    </div>;
                })}
            </div>
        );
    }
}

ModernList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            separator: PropTypes.string,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}