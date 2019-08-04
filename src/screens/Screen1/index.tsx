import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Screen } from '../../components/Layout';

function Screen1(): JSX.Element {
  return (
    <Screen>
      <Link to="/screen-3">Screen 3</Link>
      <h1>ok</h1>
    </Screen>
  );
}

export default memo(Screen1);
