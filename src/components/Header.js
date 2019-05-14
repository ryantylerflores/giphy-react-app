import React from 'react';
import './styles.css';

const Header = () => {
  return(
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/assets/logo.png" className='logo' alt="" />
      </a>
    </nav>
  )
}

export default Header;