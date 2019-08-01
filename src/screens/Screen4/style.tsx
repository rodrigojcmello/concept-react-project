import React from 'react';

interface Props2 {
  children?: JSX.Element | JSX.Element[] | string;
}

function css<T>(Element: keyof JSX.IntrinsicElements): any {
  console.log('1');
  return (props2: (props: T) => string[]): ((p: T) => void) => {
    console.log('props2--', props2);
    // props2();
    return (p: T): any => {
      console.log('p', p);
      // console.log('q', props2()(p));
      console.log('q', props2(p));
      const classNames = props2(p).join(' ');
      return <Element className={classNames}>{props2.children}</Element>;
    };
  };
}

interface SquareProps {
  blue?: boolean;
}

export const Square = css<{ blue?: boolean }>('div')((props): string[] => {
  console.log('div', props);
  return ['border-b-2', props.blue ? 'border-blue-500' : 'border-orange-500'];
});
// (
//   // function Callback(props) {
//   //   console.log('callback', props);
//   // }
//   // ({ blue }: SquareProps): string[] => [
//   //   'border-b-2',
//   //   blue ? 'border-blue-500' : 'border-orange-500'
//   // ]
// );
