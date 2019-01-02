import React from 'react';
import ProfileIcon from '../assets/images/profile.png';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';



export default class Header extends React.Component{
    render(){
        return(
            <div className="NavBar">
                <LogButton />
                <HamburgerMenu />
            </div>
        )
    }
}

export class LogButton extends React.Component {
    render(){
        return (
            <div className="logButton">
                <img src={ProfileIcon} alt="Profile icon" />
            </div>
        )
    }  
};

export class HamburgerMenu extends React.Component {
    
    render(){
        return (
            <Menu  isOpen={ false } right>
                <Link className="menu-item" to="/login">Login</Link>
                <Link className="menu-item" to="/signup">Create an account</Link>
            </Menu>
            )
    }
};


