import React from 'react';
import './styles.css';

const Header = () => {
  return(
    <nav className="px-0 navbar navbar-light bg-light">
      <a className="ml-5 navbar-brand" href="#">
        <img src="/assets/logo.png" className='logo' alt="" />
      </a>
    </nav>
  )
}

export default Header;