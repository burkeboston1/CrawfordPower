/* Packages */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import logo from './images/cp_logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="w3-row">

            <div className="w3-quarter w3-row w3-padding debug">
                <div className="w3-col" style={{width:'85%'}}>
                <a href="home.html"><img className="w3-image" src={require('./images/cp_logo.png')}/></a>
                </div>
            </div>
            
            <div className="w3-half w3-mobile navbar debug">
                <ul className="navbar">
                    <li><a className="font-cabinsketch w3-mobile" href="/home">HOME</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/music">MUSIC</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/contact">CONTACT</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/about">ABOUT</a></li>
                </ul>
            </div>
            
            <div className="w3-rest icons w3-hide-small debug">
                <div className="sm-icons w3-padding">
                    <span><a href="https://www.facebook.com/crawfordandpower/" target="_blank"><img src={require('./images/facebook_icon_round.png')}/></a></span>
                    <span><a href="https://twitter.com/crawfordnpower" target="_blank"><img src={require('./images/twitter_icon_round.png')}/></a></span>
                    <span><a href="https://www.instagram.com/crawfordnpower/" target="_blank"><img src={require('./images/insta_icon_round.png')}/></a></span>
                    <span><a href="https://www.youtube.com/channel/UCInvLw1gqXndKNfcb3sG_YA" target="_blank"><img src={require('./images/youtube_icon_round.png')}/></a></span>
                </div>
            </div>

            </div>
        );
    }
}