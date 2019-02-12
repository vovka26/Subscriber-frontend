import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

const NavBar = (props) => {
    return (
        <Menu stackable className='nav-bar'>
            <Menu.Item position='left' as={NavLink} to='/about'><i className='money icon'></i></Menu.Item>

            <Menu.Item
                as={NavLink}
                to='/dashboard'
            >
                Dashboard
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to='/subscriptions'
            >
                Subscriptions
            </Menu.Item>
            <Menu.Item position='right'>
                <Button 
                    primary
                    as={Link}
                    to='/login'
                >
                    Log-in
            </Button>
            </Menu.Item>
        </Menu>
    )
}

export default NavBar