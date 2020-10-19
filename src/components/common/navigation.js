/**
 * @author NahidRahman
 * @description
 * Navigation item components with route pages
 * along with user icon and mobile responsive menu
 *
 */


import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // To allow routes to be linked
import { Avatar } from 'antd'; // Ant design components - here for user icon
import Logo from '../../assets/images/tripologo.png';

// This array holds the navigation titles and links
const navLinks= [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Tripologs',
        path: '/tripologs'
    },
    {
        title: 'About Me',
        path: '/about'
    },
    {
        title: 'Login',
        path: '/login'
    }
]; 

export default function Navigation ({user}) {
    // Slidable navigation menu active true/false
    const [menuActive, setMenuActive] = useState(false);

    return (
    <nav className="site-nav">
        {/* Logo & Company name */}
        <span className="menu-title">
            <span className="site-logo"><img className="logo" src= {`${Logo}`} alt="logo" /></span>
            Tripologs
        </span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => {
                    return (<li key={index}>
                    <Link to={link.path}> {link.title} </Link>
                    </li>)
                }) }
            </ul>
            <span className="menu-avatar-container">
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', size:50 }}>U</Avatar> {/* ant design avatar */}
                <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span> {/* User name span */}
            </span>
           
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} /> {/* Menu icon for mobile view */}
    </nav>
    );
}