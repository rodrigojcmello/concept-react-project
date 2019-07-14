import React from 'react';
import { render } from 'react-dom';
import Button from './components/Form/Button';

function App(): JSX.Element {
  return (
    <div>
      test
      <Button name1="10" name2="ok" name3="ok">
        ok<div>ok</div>ok
        <div>ok</div>
      </Button>
    </div>
  );
}

render(<App />, document.getElementById('app'));
