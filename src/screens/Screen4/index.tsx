import React, { memo } from 'react';
import { Screen } from '../../components/Layout';
import './style.css';
import { Square } from './style';

function Screen4(): JSX.Element {
  return (
    <Screen color="purple">
      <div className="main">
        <ul className="border-r border-gray-100">
          <li>
            <a className="px-2 py-1 block text-gray-500" href="/">
              Installation
            </a>
          </li>
          <li>
            <a className="px-2 py-1 block text-gray-500" href="/">
              Installation
            </a>
          </li>
          <li>
            <a className="px-2 py-1 block text-gray-500" href="/">
              Installation
            </a>
          </li>
          <li>
            <a className="px-2 py-1 block text-gray-500" href="/">
              Installation
            </a>
          </li>
        </ul>
        <div>
          content
          <Square blue2={false} teste="ok">
            OK
          </Square>
        </div>
      </div>
    </Screen>
  );
}

export default memo(Screen4);
