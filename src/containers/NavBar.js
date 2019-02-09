import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/subscriptions'>Subscriptions</NavLink>
        </div>
    )
}

export default NavBar