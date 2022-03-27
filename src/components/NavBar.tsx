import React, {useState} from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons]= useState<boolean>(false);
  
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
         <Link to='/' className='link' onClick={()=>{setShowMediaIcons(false)}}>
          <h2>
              <span>U</span>jwal
              <span>K</span>ashichhwa
            </h2>
         </Link>
        </div>
        <div className={showMediaIcons?'mobile-menu-link':"menu-link"}>
          <ul onClick={()=>{setShowMediaIcons(false)}}>
            <li>
              <NavLink to='/' className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className="nav-link">About Me</NavLink>
            </li>
            <li>
              <NavLink to='/my-skills' className="nav-link">My Skills</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <Link className='link'
                to="https://www.linkedin.com/in/ujwal-kashichhwa-228575170/" 
                >
                  <FaLinkedinIn/>
                </Link>
            </li>
            <li>
              <Link className='link'
                to="https://www.linkedin.com/in/ujwal-kashichhwa-228575170/" 
                >
                  <FaGithub/>
                </Link>
            </li>
            <li>
              <Link className='link'
                to="https://www.linkedin.com/in/ujwal-kashichhwa-228575170/" 
                >
                  <FaTwitter/>
                </Link>
            </li>
          </ul>
          <div className='hamburger-menu'>
            <Link to="#" className='link' onClick={()=>{setShowMediaIcons(!showMediaIcons)}}>
              <GiHamburgerMenu/>
            </Link>
          </div>
        </div>
      </nav>
    </>
   
  )
}

export default NavBar;
