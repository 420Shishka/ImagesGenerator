import React, { useState } from 'react';

import { Header } from '../../components/header/Header';
import { ImagesGrid } from '../../components/images-grid/ImagesGrid';
import { KeywordContext } from '../../contexts/KeywordContext';

const MainPage = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      <Header />
      <ImagesGrid />
    </KeywordContext.Provider>
  )
};

export { MainPage };