/* Packages */
import React, { Component } from 'react';

import Background from './background';

/* Render */
export default class About extends Component {
    render() {
        return (
            <div className="w3-row">
            	<Background bgImage={require('./images/DSC_6378.jpg')} brightness={"50"} />
                <div className="w3-container w3-quarter padding">:)</div>
       			<div className="w3-container w3-half w3-margin cp-white">
       				<h2 className="font-cabinsketch w3-center"><strong>Crawford and Power</strong></h2>
       				<h4 className="font-arvo"> 
       					This is a paragraph about us and stuff.
       				</h4>
       			</div>
            </div>
        );
    }
}