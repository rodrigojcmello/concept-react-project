import React, { memo, SyntheticEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Screen } from '../../components/Layout';
import { dbItem } from '../../store/firestore';
import { useItemValue } from '../../store/item/context';
import Button from '../../components/Form/Button';
import { button1 } from '../../components/Form/Button/schemas';

function Screen1(): JSX.Element {
  const [items] = useItemValue();
  const [title, setTitle] = useState('');

  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>): void => {
      e.preventDefault();
      dbItem.add({ title, done: false });
      setTitle('');
    },
    [title]
  );

  const handleChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>): void => {
      setTitle(e.currentTarget.value);
    },
    []
  );

  console.log({ items });

  return (
    <Screen>
      <Link to="/screen-3">Screen 3</Link>
      <h1>ok</h1>
      {/* <ul> */}
      {/*  {items.map((item, i) => { */}
      {/*    return <li key={i}>{item.title}</li>; */}
      {/*  })} */}
      {/* </ul> */}
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
      </form>
      <Button text="first text" css={button1} />
    </Screen>
  );
}

export default memo(Screen1);
