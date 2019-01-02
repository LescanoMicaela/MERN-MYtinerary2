import React, {Component} from 'react';
import './Home.css';
import Logo from '../assets/images/MYtineraryLogo.png';
import BrowserArrow from '../assets/images/circled-right-2.png';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className='content'>
                <div className="logo">
                <img src={Logo} alt="logo" />
                </div>

                <div className="startBrowsing">
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                    <div className="browserArrow">
                        <Link to='/Cities'>
                            <h2>Start browsing</h2>
                            <img src={BrowserArrow} alt="browser"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;