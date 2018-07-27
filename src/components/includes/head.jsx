import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Head extends Component {
    render() {
        return (
            <head>
                {this.props.children}
            </head>
        );
    }
}

Head.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class Base extends Component {
    render() {
        return (
            <base
                src={this.props.url}
                target={this.props.target}
            />
        );
    }
}

Base.propTypes = {
    url: PropTypes.string.isRequired,
    target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"])
}

// -----------------------------------------

export default class BaseFont extends Component {
    render() {
        return (
            <basefont
                color={this.props.color}
                face={this.props.fontFamily}
                size={this.props.size}
            />
        );
    }
}

BaseFont.propTypes = {
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    size: PropTypes.string
}

// -----------------------------------------

export default class Link extends Component {
    render() {
        return (
            <link
                rel={this.props.rel}
                href={this.props.href}
                hreflang={this.props.hreflang}
                sizes={this.props.sizes}
                title={this.props.title}
                type={this.props.type}
                target={this.props.target}
                rev={this.props.rev}
                media={this.props.media}
                crossorigin={this.props.crossorigin}
            />
        );
    }
}

Link.propTypes = {
    rel: PropTypes.oneOf(["alternate", "author", "dns-prefetch", "help", "icon", "license", "next", "pingback", "preconnect", "prefetch", "preload", "prev", "search", "stylesheet"]).isRequired,
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sizes: PropTypes.string,
    hreflang: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
    rev: PropTypes.oneOf(["alternate", "stylesheet", "next", "prev", "start", "contents", "index", "glossary", "copyrigth", "chapter", "section", "subsection", "appendix", "help", "bookmark"]),
    media: PropTypes.oneOf(["all", "print", "screen", "speech"]),
    crossorigin: PropTypes.bool
}

// -----------------------------------------

export default class Meta extends Component {
    render() {
        return (
            <meta
                name={this.props.name}
                content={this.props.content}
                charset={this.props.charset}
                itemprop={this.props.itemProp}
                https-equiv={this.props.httpsEquiv}
                property={this.props.property}
            />
        );
    }
}

Meta.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    charset: PropTypes.string,
    itemProp: PropTypes.string,
    httpsEquiv: PropTypes.string,
    property: PropTypes.string
}

// -----------------------------------------

export default class Title extends Component {
    render() {
        return (
            <title>
                {this.props.title}
            </title>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

// -----------------------------------------

export default class Script extends Component {
    render() {
        return (
            <script
                src={this.props.src}
                async={this.props.async}
                defer={this.props.defer}
                type={this.props.type}
                charset={this.props.charset}
            >
            </script>
        );
    }
}

Script.propTypes = {
    src: PropTypes.string.isRequired,
    async: PropTypes.bool,
    defer: PropTypes.bool,
    type: PropTypes.string,
    charset: PropTypes.string
}

// -----------------------------------------

export default class NoScript extends Component {
    render() {
        return (
            <noscript>
                {this.props.children}
            </noscript>
        );
    }
}

Script.propTypes = {
    children: PropTypes.element.isRequired
}

// -----------------------------------------

export default class ConditionalComment extends Component {
    render() {
        return (
            TBD
        );
    }
}

ConditionalComment.propTypes = {
    // TBD
}