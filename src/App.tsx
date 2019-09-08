import React from 'react';
import { render } from 'react-dom';
import Router from './routing/Router';
import Providers from './store';
import './assets/style.scss';

function App(): JSX.Element {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

render(<App />, document.getElementById('app'));
