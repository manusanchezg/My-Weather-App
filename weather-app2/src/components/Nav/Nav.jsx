import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/' style={{textDecoration: 'none',}}>
        <span className="logo">
          <p> Home - Weather App </p>
        </span>
        </Link>
        <Link to='/about' style={{textDecoration: 'none',}}>
          <span className='about'>About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
