import React from 'react';
import { render } from 'react-dom';
import Button from './components/Form/Button';

function App(): JSX.Element {
  const list = ['oi', 'ok'];
  return (
    <div>
      test
      <Button
        fasdfa={10}
        fasdfasdaf={111}
        name1="ok"
        name2="ok"
        name3="10"
        teste="ok"
      >
        ok<div>ok</div>ok
        <div>ok</div>
      </Button>
      <ul>
        {list.map(
          (item): JSX.Element => {
            return <li key={item}>{item}</li>;
          }
        )}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('app'));
