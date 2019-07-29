import React, { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Form/Button';
import TextInput from '../../components/Form/TextInput';
import { Screen } from '../../components/Layout';

function Screen3(): JSX.Element {
  const list = ['oi', '2', 'lady', 'jose hmm', 'legal', 'top'];
  const [value, setValue] = useState('rodrigo');

  const handleChange = useCallback((text): void => {
    setValue(text);
  }, []);

  return (
    <Screen color="purple">
      <Link to="/screen-1">Screen 1</Link>
      <Button name1="ok" name2={111} name3="10">
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
    </Screen>
  );
}

export default memo(Screen3);
