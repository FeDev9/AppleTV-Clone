import React from 'react'
import './Navbar.scss'
import Icons from '../../img/icons.png';
import Search from '../../img/search.png'
import { motion } from 'framer-motion'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navbar = () => {
    return (
        <>
            <div className='background'>
            </div>
            <NavBar className='nav'>
                <div className='icons'>
                    <img src={Icons} alt="" />
                </div>
                <div className='navbar'>
                    <Nav className="ul">
                        <Nav.Link className='li'>Guarda ora</Nav.Link>
                        <div className='space'></div>
                        <Nav.Link className='li active'>tv+</Nav.Link>
                        <div className='space'></div>
                        <Nav.Link className='li'>Store</Nav.Link>
                        <div className='space'></div>
                        <Nav.Link className='li'>Libreria</Nav.Link>
                    </Nav>
                </div>
                <div className='search-cnt'>
                    <input type='text' placeholder='Cerca' />
                </div>
            </NavBar>
        </>

    )
}

export default Navbar