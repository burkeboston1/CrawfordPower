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
       					After meeting in the early months of 2014 in college, Jacob Crawford and Ethan Power
						realized they shared a common ground and similar tastes in music. The two soon realized
						this common ground was unlike any project they had ever been in before. After opening 
						for acts like Jerry Douglas and Chris Knight not long after just meeting one another, 
						they decided to form their duo, Crawford & Power. The duo have since been gigging around 
						Southwest Virginia and have shared the stage with acts such as Luke Combs, Drake White, 
						and Confederate Railroad. They are currently focusing on writing and recording for their 
						debut release. 
       				</h4>
       			</div>
            </div>
        );
    }
}