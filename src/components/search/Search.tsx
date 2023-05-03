import React, { useRef, useContext } from 'react';

import './Search.css';
import { IoMdSearch } from 'react-icons/io';
import { KeywordContext } from '../../contexts/KeywordContext';

const Search = () => {
  const { keyword, setKeyword } = useContext(KeywordContext);
  const input = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!setKeyword) return;

    setKeyword(input?.current?.value ?? '');
  }

  return (
    <div className='search-container'>
      <input className='search__input' type="search" placeholder='Search...' ref={input} />

      <button className='search__btn'
        onClick={handleClick}>
        <IoMdSearch />
      </button>
    </div>
  )
}

export { Search };