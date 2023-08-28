import React,{useState} from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaPhone} from 'react-icons/fa'
import {GiHamburgerMenu} from "react-icons/gi"
import './navbar.css'
import brandLogo from '../../images/BBr/bbr.png'

const Navbar = () => {
    const [showMediaIons,setShowMediaIcons]= useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <img src={brandLogo} alt="Brand Logo" />
                </div>

                <div className={showMediaIons ?'menu-link mobile-menu-link' : 'menu-link'}>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>About Us</a>
                        </li>
                        <li>
                            <a href=''>Ventures</a>
                        </li>
                        <li>
                            <a href=''>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className='social-media'>
                    <ul>
                    <li>
                        <a href='#' target="_blank"><FaFacebookSquare className='facebook'/></a>
                    </li>
                    <li>
                        <a href='#' target="_blank"><FaInstagramSquare className='instagram'/></a>
                    </li>
                    <li>
                        <a href='#' target="_blank"><FaPhone className='youtube'/></a>
                    </li>
                    </ul>

                    {/* HAMBURGER MENU START HERE */}
                    <div className='hamburger-menu'>
                        <a href='#' onClick={()=>setShowMediaIcons(!showMediaIons)}><GiHamburgerMenu/></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar