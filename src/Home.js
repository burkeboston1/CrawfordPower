/* Packages */
import React, { Component } from 'react';

import bgImageHome from './images/DSC_3892.jpg';

/* Render */
export default class Home extends Component {
    render() {
        return (
        	<div>
        	<div id="home-bg-image" style={{backgroundImage: 'url(' + require('./images/DSC_3892.jpg') + ')'}}>meeeeee</div>
            <div className="w3-row w3-display-container cp-white debug" style={{marginTop:'150px'}}>
        		<div className="w3-display-topmiddle w3-center">
        			<h1 className="cp-bottom-bar font-size-yuge font-arvo">COMING SOON</h1>
        			<h2 className="font-size-bigly font-arvo">A New EP</h2>
        		</div>
            </div>
            </div>
        );
    }
}