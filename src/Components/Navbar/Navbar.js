import React, { Component } from 'react';
//import logo from '../../images/logo1.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link, Links } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className='nav-bar'>
                <ul id="nav">

                    <li className="nav-item">
                        <NavLink className="nav-link"
                        activeClassName="avtive_class" exact to="/">Home</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link"
                        activeClassName="avtive_class" exact to="/rooms">Rooms</NavLink>
                    </li>
                    
                    

                    <li className="nav-item">
                        <NavLink className="nav-link" 
                        activeClassName="avtive_class"exact to="/contact">Contact</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link"
                        activeClassName="avtive_class" exact to="/gallery">Gallery</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
