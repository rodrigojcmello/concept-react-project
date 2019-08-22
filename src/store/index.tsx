import React from 'react';
import { ModalProvider } from './modal/context';
import modalReducer from './modal/reducer';
import { ItemProvider } from './item/context';
import itemReducer from './item/reducer';

interface ProviderProps {
  children: JSX.Element[] | JSX.Element;
}

function Provider({ children }: ProviderProps): JSX.Element {
  return (
    <ItemProvider initialState={[]} reducer={itemReducer}>
      <ModalProvider initialState={[]} reducer={modalReducer}>
        <>{children}</>
      </ModalProvider>
    </ItemProvider>
  );
}

export default Provider;
