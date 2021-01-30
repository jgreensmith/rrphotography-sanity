import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';

import './navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
        <nav className="main-nav">
            <div className="brand-wrapper">
                <div className="brand-title">
                    <span className="span-title">Rebecca Reynolds </span>
                    Photography
                </div>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-link" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link" onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li 
                    className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/gallery' className="nav-link" onClick={closeMobileMenu}>
                        Gallery <span className="fas fa-caret-down"></span>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                    <Link to='/blog' className="nav-link" onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
        <br></br>
        </>
    );

}


export default Navbar;