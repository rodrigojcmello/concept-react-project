import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Screen } from '../../components/Layout';
import './style.scss';

function Screen1(): JSX.Element {
  return (
    <Screen>
      <Link to="/screen-3">Screen 3</Link>
      <div className="test mx-auto">Screen 1</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        ok
      </button>
    </Screen>
  );
}

export default memo(Screen1);
