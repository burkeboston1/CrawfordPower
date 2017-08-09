/* Packages */
import React, { Component } from 'react';

import Background from './background';

/* Render */
export default class Home extends Component {

    render() {
        return (
        	<div>
            <Background bgImage={require('./images/DSC_3892.jpg')} brightness={"80"}/>
            <div className="w3-row w3-display-container cp-white" style={{height: "50vh"}}>
        		<div className="w3-display-middle w3-center">
        			<h1 className="cp-bottom-bar font-size-yuge font-arvo">COMING SOON</h1>
        			<h2 className="font-size-bigly font-style-italic font-arvo">A New EP</h2>
        		</div>
            </div>
            </div>
        );
    }
}