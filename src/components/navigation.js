import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Avatar } from 'antd';

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
] 

export default function Navigation ({user}) {
const [menuActive, setMenuActive] = useState(false);

    return (
    <nav className="site-nav">
        <span className="menu-title">Tripologs</span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => {
                    return (<li key={index}>
                    <Link to={link.path}> {link.title} </Link>
                    </li>)
                }) }
            </ul>
            <span className="menu-avatar-container">
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', size:50 }}>U</Avatar>
                <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
            </span>
           
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    </nav>
    );
}