import React, { createContext, useContext, useReducer } from 'react';
import { Provider, UseItemReducer } from './types';

export const ItemContext = createContext<UseItemReducer | []>([]);

export const ItemProvider = ({
  reducer,
  initialState,
  children
}: Provider): JSX.Element => (
  <ItemContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ItemContext.Provider>
);

export const useItemValue = (): UseItemReducer => useContext(ItemContext);
