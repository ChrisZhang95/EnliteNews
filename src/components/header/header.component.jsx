import React from 'react';
import Logo from '../logo/logo.component';
import './header.scss';
import SearchBar from '../searchBar/searchBar.component';

const Header = () => (
  <div className='header'>
    <div className='logo'>
      <Logo />
    </div>
    <SearchBar />
    <div>
      <ul className='header-menu'>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </div>
  </div>
);

export default Header;