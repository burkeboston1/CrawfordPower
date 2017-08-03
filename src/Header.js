/* Packages */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import logo from './images/cp_logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="w3-row">
                {/* Logo */}
                <div className="w3-quarter debug w3-padding cp-black">
                    <img src={logo} className="w3-image" />
                </div>

                {/* Navbar */}
                <div className="w3-half debug">
                    <div className="w3-display-container w3-padding">
                        <div className="w3-col debug w3-mobile w3-display-topmiddle" style={{width:'66.67%'}}>
                            <div><Link to='/home' className="w3-bar-item w3-button w3-mobile" style={{width:'25%'}}>Home</Link></div>
                            <div><Link to='/music' className="w3-bar-item w3-button w3-mobile cp-quarter" style={{width:'25%'}}>Music</Link></div>
                            <Link to={`/about`} className="w3-bar-item w3-button w3-mobile cp-quarter" style={{width:'25%'}}>About</Link>
                            <Link to={`/contact`} className="w3-bar-item w3-button w3-mobile cp-quarter" style={{width:'25%'}}>Contact</Link>
                        </div>
                    </div>
                </div>

                {/* Icons */}
                <div className="w3-rest w3-container debug w3-hide-small">
                    ICONS
                </div>
            </div>
        );
    }
}