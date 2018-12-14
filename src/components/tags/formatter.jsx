import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Bold extends Component {
    render() {
        return (
            <b>
                {this.props.text}
            </b>
        );
    }
}

Bold.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Italic extends Component {
    render() {
        return (
            <i>
                {this.props.text}
            </i>
        );
    }
}

Italic.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Strong extends Component {
    render() {
        return (
            <strong>
                {this.props.text}
            </strong>
        );
    }
}

Strong.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Emphrasize extends Component {
    render() {
        return (
            <em>
                {this.props.text}
            </em>
        );
    }
}

Emphrasize.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Up extends Component {
    render() {
        return (
            <sup>
                {this.props.text}
            </sup>
        );
    }
}

Up.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Down extends Component {
    render() {
        return (
            <sub>
                {this.props.text}
            </sub>
        );
    }
}

Down.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Inserted extends Component {
    render() {
        return (
            <ins>
                {this.props.text}
            </ins>
        );
    }
}

Inserted.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Marked extends Component {
    render() {
        return (
            <mark>
                {this.props.text}
            </mark>
        );
    }
}

Marked.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Delete extends Component {
    render() {
        return (
            <del>
                {this.props.text}
            </del>
        );
    }
}

Delete.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Smaller extends Component {
    render() {
        return (
            <small>
                {this.props.text}
            </small>
        );
    }
}

Smaller.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Bigger extends Component {
    render() {
        return (
            <big>
                {this.props.text}
            </big>
        );
    }
}

Bigger.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Code extends Component {
    render() {
        return (
            <code>
                {this.props.text}
            </code>
        );
    }
}

Code.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Variable extends Component {
    render() {
        return (
            <var>
                {this.props.text}
            </var>
        );
    }
}

Variable.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Break extends Component {
    render() {
        return (
            <br />
        );
    }
}

// -----------------------------------------

export default class Acronym extends Component {
    render() {
        return (
            <acronym>
                {this.props.text}
            </acronym>
        );
    }
}

Acronym.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Quote extends Component {
    render() {
        return (
            <q
                cite={this.props.url}
            >
                {this.props.children}
            </q>
        );
    }
}

Quote.propTypes = {
    url: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class Blockquote extends Component {
    render() {
        return (
            <blockquote
                cite={this.props.url}
            >
                {this.props.children}
            </blockquote>
        );
    }
}

Blockquote.propTypes = {
    url: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class Abbreviation extends Component {
    render() {
        return (
            <abbr
                title={this.props.title}
            >
                {this.props.children}
            </abbr>
        );
    }
}

Abbreviation.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class Address extends Component {
    render() {
        return (
            <address>
                {this.props.text}
            </address>
        );
    }
}

Address.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class KeyBoardDisplay extends Component {
    render() {
        return (
            <kbd>
                {this.props.text}
            </kbd>
        );
    }
}

KeyBoardDisplay.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Pre extends Component {
    render() {
        return (
            <pre>
                {this.props.text}
            </pre>
        );
    }
}

Pre.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Cite extends Component {
    render() {
        return (
            <cite>
                {this.props.text}
            </cite>
        );
    }
}

Cite.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Bidirectional extends Component {
    render() {
        return (
            <bdo
                dir={this.props.direction}
            >
                {this.props.text}
            </bdo>
        );
    }
}

Bidirectional.propTypes = {
    direction: PropTypes.oneOf(["","rtl","ltr"]),
    text: PropTypes.string
}

// -----------------------------------------

export default class Article extends Component {
    render() {
        return (
            <article>
                {this.props.children}
            </article>
        );
    }
}

Article.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class Aside extends Component {
    render() {
        return (
            <aside>
                {this.props.children}
            </aside>
        );
    }
}

Aside.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class Applet extends Component {
    render() {
        return (
            <applet
                code={this.props.url}
                object={this.props.objectName}
                align={this.props.position}
                alt={this.props.altText}
                archive={this.props.archiveUrl}
                codebase={this.props.codebaseUrl}
                hspace={this.props.spaceHorizontal}
                vspace={this.props.spaceVertical}
                height={this.props.height}
                width={this.props.width}
                name={this.props.name}
            >
                {this.props.children}
            </applet>
        );
    }
}

Applet.propTypes = {
    url: PropTypes.string.isRequired,
    objectName: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["left","right","top","bottom","middle","baseline"]),
    altText: PropTypes.string,
    archiveUrl: PropTypes.string,
    codebaseUrl: PropTypes.string,
    spaceHorizontal: PropTypes.string,
    spaceVertical: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class BidirectionalIsolation extends Component {
    render() {
        return (
            <bdi>
                {this.props.text}
            </bdi>
        );
    }
}

BidirectionalIsolation.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Center extends Component {
    render() {
        return (
            <center>
                {this.props.children}
            </center>
        );
    }
}

Center.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class Data extends Component {
    render() {
        return (
            <data
                value={this.props.value}
            >
                {this.props.children}
            </data>
        );
    }
}

Data.propTypes = {
    value: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class DescriptionList extends Component {
    render() {
        return (
            <dl>
                {this.props.text}
            </dl>
        );
    }
}

DescriptionList.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class DescriptionTerm extends Component {
    render() {
        return (
            <dt>
                {this.props.text}
            </dt>
        );
    }
}

DescriptionTerm.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class DescriptionDescribe extends Component {
    render() {
        return (
            <dd>
                {this.props.text}
            </dd>
        );
    }
}

DescriptionDescribe.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Details extends Component {
    render() {
        return (
            <details
                open={this.props.isOpen}
            >
                {this.props.children}
            </details>
        );
    }
}

Details.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element
}

// -----------------------------------------

export default class DefininingInstance extends Component {
    render() {
        return (
            <dfn
                id={this.props.id}
                title={this.props.title}
            >
                {this.props.children}
            </dfn>
        );
    }
}

DefininingInstance.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class Dialog extends Component {
    render() {
        return (
            <dialog
                compact={this.props.compact}
            >
                {this.props.children}
            </dialog>
        );
    }
}

Dialog.propTypes = {
    compact: PropTypes.bool,
    children: PropTypes.element
}

// -----------------------------------------

export default class FormBorder extends Component {
    render() {
        return (
            <fieldset
                disabled={this.props.disabled}
                form={this.props.formName}
                name={this.props.name}
            >
                {this.props.children}
            </fieldset>
        );
    }
}

FormBorder.propTypes = {
    disabled: PropTypes.bool,
    formName: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class FormTitle extends Component {
    render() {
        return (
            <legend
                align={this.props.position}
            >
                {this.props.children}
            </legend>
        );
    }
}

FormTitle.propTypes = {
    position: PropTypes.oneOf(["left","top","bottom","right"]),
    children: PropTypes.element
}

// -----------------------------------------

export default class Figure extends Component {
    render() {
        return (
            <figure>
                {this.props.children}
            </figure>
        );
    }
}

Figure.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class FigCaption extends Component {
    render() {
        return (
            <figcaption>
                {this.props.children}
            </figcaption>
        );
    }
}

FigCaption.propTypes = {
    children: PropTypes.element
}

// -----------------------------------------

export default class Frame extends Component {
    render() {
        return (
            <frame
                frameborder={this.props.border}
                longdesc={this.props.urlLong}
                src={this.props.url}
                marginHeight={this.props.height}
                marginWidth={this.props.width}
                name={this.props.name}
                noresize={this.props.noresize}
                scrolling={this.props.scrollFormat}
            />
        );
    }
}

Frame.propTypes = {
    border: PropTypes.PropTypes.oneOf(["0","1"]),
    urlLong: PropTypes.string,
    url: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    name: PropTypes.string,
    noresize: PropTypes.oneOf(["noresize"]),
    scrollFormat: PropTypes.oneOf(["yes","no","auto"])
}

// -----------------------------------------

export default class FrameSet extends Component {
    render() {
        return (
            <frameset
                rows={this.props.rows}
                cols={this.props.cols}
            >
                {this.props.children}
            </frameset>
        );
    }
}

FrameSet.propTypes = {
    rows: PropTypes.string,
    cols: PropTypes.string,
    children: PropTypes.element
}

// -----------------------------------------

export default class NoFrames extends Component {
    render() {
        return (
            <noframes>
                {this.props.text}
            </noframes>
        );
    }
}

NoFrames.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Main extends Component {
    render() {
        return (
            <main>
                {this.props.text}
            </main>
        );
    }
}

Main.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Meter extends Component {
    render() {
        return (
            <meter
                value={this.props.value}  
                min={this.props.min} 
                max={this.props.max}           
            >
                {this.props.text}
            </meter>
        );
    }
}

Meter.propTypes = {
    value: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    text: PropTypes.string
}

// -----------------------------------------

export default class Nav extends Component {
    render() {
        return (
            <nav>
                {this.props.text}
            </nav>
        );
    }
}

Nav.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Output extends Component {
    render() {
        return (
            <output
                name={this.props.name}
                form={this.props.form}
                for={this.props.for}
            >
            </output>
        );
    }
}

Output.propTypes = {
    name: PropTypes.string,
    form: PropTypes.string,
    for: PropTypes.string
}

// -----------------------------------------

export default class Progress extends Component {
    render() {
        return (
            <progress
                value={this.props.value}
                max={this.props.max}
            >
            </progress>
        );
    }
}

Progress.propTypes = {
    value: PropTypes.string,
    max: PropTypes.string
}

// -----------------------------------------

export default class Ruby extends Component {
    render() {
        return (
            <ruby>
                {this.props.text}
            </ruby>
        );
    }
}

Ruby.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class RubyTerm extends Component {
    render() {
        return (
            <rt>
                {this.props.text}
            </rt>
        );
    }
}

RubyTerm.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class RubyParse extends Component {
    render() {
        return (
            <rb>
                {this.props.text}
            </rb>
        );
    }
}

RubyParse.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class SDelete extends Component {
    render() {
        return (
            <s>
                {this.props.text}
            </s>
        );
    }
}

SDelete.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class StrikeDelete extends Component {
    render() {
        return (
            <strike>
                {this.props.text}
            </strike>
        );
    }
}

Strike.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Summary extends Component {
    render() {
        return (
            <summary>
                {this.props.text}
            </summary>
        );
    }
}

Summary.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class WordBreakOpportunity extends Component {
    render() {
        return (
            <wbr>
                {this.props.text}
            </wbr>
        );
    }
}

WordBreakOpportunity.propTypes = {
    text: PropTypes.string
}

// -----------------------------------------

export default class Template extends Component {
    render() {
        return (
            <template>
                {this.props.text}
            </template>
        );
    }
}

Template.propTypes = {
    text: PropTypes.string
}