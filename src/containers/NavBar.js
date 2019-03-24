import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'
import logo from '../images/logo.png'


const NavBar = (props) => {
    return (
        <Menu stackable className='nav-bar'>
            <Menu.Item position='left' as={NavLink} to='/about'><img className='logo-image' src={logo} alt='logo' /></Menu.Item>

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
                {props.loginStatus ? 
                    <Button 
                    primary
                    as={Link}
                    to='/login'
                    >
                        Login
                    </Button>
                    :
                    <div>
                        Hey, {props.username}
                    </div>
            
            
                }
                
            </Menu.Item>
        </Menu>
    )
}

export default NavBar