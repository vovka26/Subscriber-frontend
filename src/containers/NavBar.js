import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const NavBar = () => {
    return (
        <Menu className='ui center aligned grid'>
            <Menu.Item as={NavLink} to='/dashboard'>Dashboard</Menu.Item>
            <Menu.Item as={NavLink} to='/subscriptions'>Subscriptions</Menu.Item>
        </Menu>
    )
}

export default NavBar