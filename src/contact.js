/* Packages */
import React, { Component } from 'react';

import Background from './background';

/* Render */
export default class Contact extends Component {
    render() {
        return (
            <div className="w3-row">
            	<Background bgImage={require('./images/DSC_6422.jpg')} brightness={"55"} />
                <div className="w3-quarter padding">It was a catch.</div>
			
				<div className="w3-half w3-center cp-white w3-margin">
					<h2 className="font-cabinsketch"><strong>Booking Information</strong></h2>
					<h3 className="font-arvo">Kent Martin, SRO Productions<br/>(540)342-0400<br/>kent@GoSRO.com </h3>
					<br/><br/>
					<h2 className="font-cabinsketch bold"><strong>General Inquiries</strong></h2>
					<h3 className="font-arvo">crawfordandpower@gmail.com</h3>
				</div>
			</div>
        );
    }
}