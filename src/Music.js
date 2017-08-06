/* Packages */
import React, { Component } from 'react';

import Background from './Background';
import showDates from './data/show-dates.json';

/* Render */
export default class Music extends Component {
    componentWillMount() {	
    	console.log("Music is mounting...");
    }
    render() {
        return (
            <div className="w3-row">
                <Background bgImage={require('./images/DSC_3837.jpg')} brightness={"65"} />
                
                <div className="w3-container w3-quarter padding debug">:)</div>
                <div className="w3-container w3-half font-arvo cp-white debug">
                    <h2 className="w3-center cp-white font-cabinsketch"><strong>Upcoming Dates</strong></h2>
                    <table className="w3-table" style={{fontSize:"1.8em", borderSpacing:"0px", marginTop: "40px"}}>
                    {showDates.map(function(showDate) {
                        return(
                            <tr className="cp-border-bottom">
                            <td className="font-arvo font-style-italic w3-left-align" style={{verticalAlign: "bottom"}}>{showDate.date}</td>
                            <td className="font-arvo w3-right-align">{showDate.venue}<br/>{showDate.loc}</td>
                            </tr>
                        );
                    })}
                    </table>
                </div>
            </div>
        );
    }
}