/* Packages */
import React, { Component } from 'react';

import Background from './Background';

/* Render */
export default class Home extends Component {
    render() {
        return (
        	<div>
            <Background bgImage={require('./images/DSC_3892.jpg')} brightness={"80"}/>
            <div className="w3-row w3-display-container cp-white debug" style={{marginTop:'150px'}}>
        		<div className="w3-display-topmiddle w3-center">
        			<h1 className="cp-bottom-bar font-size-yuge font-arvo">COMING SOON</h1>
        			<h2 className="font-size-bigly font-style-italic font-arvo">A New EP</h2>
        		</div>
            </div>
            </div>
        );
    }
}