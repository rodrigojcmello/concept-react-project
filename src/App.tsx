import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from './assets/styled-components/GlobalStyle';
import Router from './routing/Router';
import Providers from './store';

function App(): JSX.Element {
  return (
    <Providers>
      <Router />
      <GlobalStyle />
    </Providers>
  );
}

render(<App />, document.getElementById('app'));
