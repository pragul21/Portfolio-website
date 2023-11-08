import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="Logo" className='logo' />
                <div className='desktopMenu'>
                    <Link className='desktopMenuListItem'>Home</Link>
                    <Link className='desktopMenuListItem'>About</Link>
                    <Link className='desktopMenuListItem'>Portfolio</Link>

                </div>
                <div className='desktopMenuBtn'>
                    <button>
                        <img src={contactImg} alt="contact" className='desktopMenuImg' />
                        Contact Me</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;