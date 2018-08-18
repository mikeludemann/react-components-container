import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {
    render() {
        return (
            <table
                id={this.props.id}
                className={this.props.class}
            >
                {this.props.children}
            </table>
        )
    }
}

Table.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------

export default class TableHeader extends Component {
    render() {
        return (
            <thead
                id={this.props.id}
                className={this.props.class} 
            >
                {this.props.children}
            </thead>
        )
    }
}

TableHeader.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------

export default class TableBody extends Component {
    render() {
        return (
            <tbody
                id={this.props.id}
                className={this.props.class} 
            >
                {this.props.children}
            </tbody>
        )
    }
}

TableBody.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------

export default class TableFooter extends Component {
    render() {
        return (
            <tfoot
                id={this.props.id}
                className={this.props.class} 
            >
                {this.props.children}
            </tfoot>
        )
    }
}

TableFooter.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------

export default class TableRow extends Component {
    render() {
        return (
            <tr
                id={this.props.id}
                className={this.props.class} 
            >
                {this.props.children}
            </tr>
        )
    }
}

TableRow.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------

export default class TableColumn extends Component {
    render() {
        return (
            <td
                id={this.props.id}
                className={this.props.class} 
                colspan={this.props.columnSize}
                rowspan={this.props.rowSize}
                headers={this.props.headers}
            >
                {this.props.children}
            </td>
        )
    }
}

TableColumn.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string,
    colspan: PropTypes.string,
    rowspan: PropTypes.string,
    headers: PropTypes.string
}

// -----------------------------------------

export default class TableHead extends Component {
    render() {
        return (
            <thead
                id={this.props.id}
                className={this.props.class} 
                abbr={this.props.abbreviation}
                colspan={this.props.columnSize}
                rowspan={this.props.rowSize}
                headers={this.props.headers}
                scope={this.props.scope}
            >
                {this.props.children}
            </thead>
        )
    }
}

TableHead.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string,
    abbreviation: PropTypes.string,
    colspan: PropTypes.string,
    rowspan: PropTypes.string,
    headers: PropTypes.string,
    scope: PropTypes.oneOf(["col","colgroup","row","rowgroup"])
}

// -----------------------------------------

export default class TableColumnGroup extends Component {
    render() {
        return (
            <colgroup
                id={this.props.id}
                className={this.props.class} 
                span={this.props.size}
            >
                {this.props.children}
            </colgroup>
        )
    }
}

TableColumnGroup.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string,
    size: PropTypes.string
}

// -----------------------------------------

export default class TableColumnOfGroup extends Component {
    render() {
        return (
            <col
                id={this.props.id}
                className={this.props.class} 
                span={this.props.size}
            >
                {this.props.children}
            </col>
        )
    }
}

TableColumnOfGroup.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string,
    size: PropTypes.string
}

// -----------------------------------------

export default class TableCaption extends Component {
    render() {
        return (
            <caption
                id={this.props.id}
                className={this.props.class} 
            >
                {this.props.children}
            </caption>
        )
    }
}

TableCaption.propTypes = {
    id: PropTypes.string,
    class: PropTypes.string
}

// -----------------------------------------