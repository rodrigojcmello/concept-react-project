import React, { useCallback, useState } from 'react';
import { render } from 'react-dom';
import Button from './components/Form/Button';
import TextInput from './components/Form/TextInput';

function App(): JSX.Element {
  const list = ['oi', '2', 'lady', 'jose hmm', 'legal', 'topezera'];
  const [value, setValue] = useState('rodrigo');

  const handleChange = useCallback((text): void => {
    setValue(text);
  }, []);

  return (
    <div>
      <Button name1="ok" name2={100} name3="10">
        <div>ok</div>
        <div>ok</div>
      </Button>
      <TextInput onChange={handleChange} value={value} />
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
