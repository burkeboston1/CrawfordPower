/* Packages */
import React, { Component } from 'react';

/* Render */
export default class Background extends Component {
    componentWillMount() {
        this.setState({styles:{
            bgImage: {
                position: "fixed",
                margin: "auto",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: -"1",
                
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundColor: "black",
                backgroundSize: "cover",
                backgroundImage: `url(${this.props.bgImage})`,
                filter: `brightness(${this.props.brightness}%)`
            }
        }});
    }
    render() {
        return (
        	<div className="w3-animate-opacity" style={this.state.styles.bgImage}>
            </div>
        );
    }
}