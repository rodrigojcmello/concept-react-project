import React from 'react';
import modalReducer from './modal/reducer';
import { ModalProvider } from './modal/context';

interface ProviderProps {
  children: JSX.Element[];
}

function Provider({ children }: ProviderProps): JSX.Element {
  return (
    <ModalProvider initialState={[]} reducer={modalReducer}>
      <>{children}</>
    </ModalProvider>
  );
}

export default Provider;
