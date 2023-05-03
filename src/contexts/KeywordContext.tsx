import React, { createContext, Dispatch, SetStateAction } from 'react';

type KeywordContextValue = {
  keyword?: string,
  setKeyword?: Dispatch<SetStateAction<string>>
}

const KeywordContext = createContext<KeywordContextValue>({});

export { KeywordContext };