import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <nav className='navbarContainer'>
      <a className='navLogo' href='/'>
        <FontAwesomeIcon icon={faUserAstronaut} className='navIcon' /> <p>LOGO</p></a>
      <div className={click ? 'sidebar active' : 'sidebar'}>
        <button className='hamburger' type='button' onClick={handleClick}>
          <div></div>
        </button>
        <ul className='navMenu' onClick={handleClick}>
          <li>
            <Link className='link' to='/'> Home
            </Link>
          </li>
          <li>
            <Link className='link' to='/about'> About
            </Link>
          </li>
          <li>
            <Link className='link' to='/contact'> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
