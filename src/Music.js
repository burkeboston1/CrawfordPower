/* Packages */
import React, { Component } from 'react';

/* Render */
export default class Music extends Component {
    componentWillMount() {	
    	console.log("Music is mounting...");
    }
    render() {
        return (
            <div className="w3-row">
                Music
            </div>
        );
    }
}