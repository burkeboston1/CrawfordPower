/* Packages */
import React, { Component } from 'react';

import Background from './background';
import axios from 'axios';

/* Render */
export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDates: []
        };
    }
    componentDidMount() {
        axios.get('https://crawfordpowerapi.herokuapp.com/api/showdates/')
            .then(({data}) => {
                console.log('GET Response: ' + data);
                this.setState({
                    showDates: data
                })
            })
            .catch((err)=> {
                console.log(err);
            })
    }
    render() {
        return (
            <div className="w3-row" style={{marginBottom: "125px"}}>
                <Background bgImage={require('./images/DSC_3837.jpg')} brightness={"65"} />
                
                <div className="w3-container w3-quarter padding">:)</div>
                <div className="w3-container w3-half font-arvo cp-white">
                    <h2 className="w3-center cp-white font-cabinsketch"><strong>Upcoming Dates</strong></h2>
                    <table className="w3-table w3-animate-bottom" style={{fontSize:"1.5em", borderSpacing:"0px", marginTop: "40px"}}>
                        <tbody> 
                    {this.state.showDates.map(function(showDate) {
                        var date = new Date(showDate.date);
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return(
                            <tr className="cp-border-bottom">
                            <td className="font-arvo font-style-italic w3-left-align" style={{verticalAlign: "bottom", paddingTop: "45px"}}>{monthNames[date.getMonth()] + ', ' + date.getDate()}<br/>{showDate.location}</td>
                            <td className="font-arvo w3-right-align" style={{paddingTop: "45px"}}>{showDate.venue}</td>
                            </tr>
                        );
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}