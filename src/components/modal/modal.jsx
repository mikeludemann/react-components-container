import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {

    /*
    componentDidMount(){
    
    
        var dw = document || window;
        
        dw.onclick = function (event) {
    
        var modal = document.getElementById("simpleModal");
    
        if (event.target == modal) {
    
            modal.style.display = "none";
            this.props.show = this.props.show;
    
        }
    
    }
    */

    render() {

        if (!this.props.show) {
            return null;
        }

        const backgroundStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            transition: "all 1s ease-in-out"
        };

        const small = {
            backgroundColor: '#fff',
            borderRadius: 5,
            minWidth: "25%",
            minHeight: "25%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            transition: "all 1s ease-in-out"
        };

        const medium = {
            backgroundColor: '#fff',
            borderRadius: 5,
            minWidth: "50%",
            minHeight: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            transition: "all 1s ease-in-out"
        };

        const large = {
            backgroundColor: '#fff',
            borderRadius: 5,
            minWidth: "75%",
            minHeight: "75%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            transition: "all 1s ease-in-out"
        };

        const full = {
            backgroundColor: '#fff',
            borderRadius: 0,
            minWidth: "100%",
            minHeight: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            transition: "all 1s ease-in-out"
        };

        const headerStyle = {
            padding: "20px",
            minHeight: "calc(5vh)"
        };

        const footerStyle = {
            padding: "10px 20px",
            minHeight: "calc(5vh)"
        };

        const contentStyle = {
            padding: "20px",
            minHeight: "calc(25vh)"
        };

        const close = {
            position: "absolute",
            right: "10px",
            top: "10px"
        };

        const line = {
            margin: "0",
            padding: "0"
        };

        return (
            <div id="simpleModal" className="backdrop" style={backgroundStyle}>
                <div id="modal" style={full}>
                    <div className="header" style={headerStyle}>
                        <div>
                            {this.props.headline}
                        </div>
                        <div onClick={this.props.close} style={close}>
                            x
                        </div>
                    </div>
                    <hr style={line} />
                    <div className="content" style={contentStyle}>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <hr style={line} />
                    <div className="footer" style={footerStyle}>
                        <div>
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    headline: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    footer: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    show: PropTypes.bool,
}