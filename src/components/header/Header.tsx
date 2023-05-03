import React from 'react';

import { Search } from '../search/Search';
import { IoMdImages } from 'react-icons/io';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo-container'>
        <span className='header__logo-icon'>
          <IoMdImages />
        </span>

        <h1 className='header__logo'>
          Images Generator
        </h1>
      </div>

      <Search />
    </div>
  )
}

export { Header };