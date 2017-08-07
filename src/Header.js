/* Packages */
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

/* Components */
import logo from './images/cp_logo.png';
import fbIconRound from './images/facebook_icon_round.png';
import twitterIconRound from './images/twitter_icon_round.png';
import instaIconRound from './images/insta_icon_round.png';
import youtubeIconRound from './images/youtube_icon_round.png';

export default class Header extends Component {
    render() {
        return (
            <div className="w3-row">

            <div className="w3-quarter w3-row w3-padding debug">
                <div className="w3-col" style={{width:'85%'}}>
                <a href="/home"><img alt="" className="w3-image" src={logo}/></a>
                </div>
            </div>
            
            <div className="w3-half w3-mobile navbar debug">
                <ul className="navbar">
                    {/*<li><Link className="font-cabinsketch w3-mobile" to="/home">HOME</Link></li>
                    <li><Link className="font-cabinsketch w3-mobile" to="/music">MUSIC</Link></li>
                    <li><Link className="font-cabinsketch w3-mobile" to="/contact">CONTACT</Link></li>
                    <li><Link className="font-cabinsketch w3-mobile" to="/about">ABOUT</Link></li>*/}
                    <li><a className="font-cabinsketch w3-mobile" href="/home">HOME</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/music">MUSIC</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/contact">CONTACT</a></li>
                    <li><a className="font-cabinsketch w3-mobile" href="/about">ABOUT</a></li>
                </ul>
            </div>
            
            <div className="w3-rest w3-hide-small debug w3-padding">
                <div className="sm-icons w3-padding">
                    <span><a href="https://www.facebook.com/crawfordandpower/" target="_blank" rel="noopener noreferrer"><img alt="" src={fbIconRound}/></a></span>
                    <span><a href="https://twitter.com/crawfordnpower" target="_blank" rel="noopener noreferrer"><img alt="" src={twitterIconRound}/></a></span>
                    <span><a href="https://www.instagram.com/crawfordnpower/" target="_blank" rel="noopener noreferrer"><img alt="" src={instaIconRound}/></a></span>
                    <span><a href="https://www.youtube.com/channel/UCInvLw1gqXndKNfcb3sG_YA" target="_blank" rel="noopener noreferrer"><img alt="" src={youtubeIconRound}/></a></span>
                </div>
            </div>

            </div>
        );
    }
}