import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Screen } from '../../components/Layout';
import './style.scss';

const list = ['list 1', 'list 2', 'list 3', 'list 4', 'list 5'];

function Screen1(): JSX.Element {
  return (
    <Screen>
      <Link to="/screen-3">Screen 3</Link>
      <div className="test mx-auto">Screen 1</div>
      <button
        className={[
          'bg-transition',
          'bg-blue-500',
          'hover:bg-blue-700',
          'text-white',
          'font-bold',
          'py-1',
          'px-4',
          'rounded'
        ].join(' ')}
      >
        ok
      </button>
      <div className="bg-indigo-900 text-center py-1 lg:px-2">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Get the coolest t-shirts from our brand new store
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      <ul className={['container', 'mx-auto'].join(' ')}>
        {list.map(
          (item): JSX.Element => (
            <li
              key={item}
              className={[
                'text-gray-600',
                'border-gray-300',
                'border-b',
                'py-2',
                'px-4'
              ].join(' ')}
            >
              {item} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          )
        )}
      </ul>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-xs text-indigo-600 font-bold">
            Marketing
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-600">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </Screen>
  );
}

export default memo(Screen1);
