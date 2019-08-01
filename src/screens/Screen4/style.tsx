import React from 'react';

interface CSSProps {
  children?: JSX.Element | JSX.Element[] | string;
}

function css<T>(Element: keyof JSX.IntrinsicElements): any {
  console.log('1');
  return (styles: (props: T) => string[]): ((p: T) => void) => {
    console.log('styles--', styles);
    // styles();
    return function CSS(p: CSSProps & T): JSX.Element {
      console.log('p', p);
      // console.log('q', styles()(p));
      console.log('q', styles(p));
      const classNames = styles(p).join(' ');
      return <Element className={classNames}>{p.children}</Element>;
    };
  };
}

interface SquareProps {
  blue?: boolean;
}

interface SquareProps {
  blue?: boolean;
}

export const Square = css<SquareProps>('button')(
  (props: SquareProps): string[] => [
    'border-b-2',
    props.blue ? 'border-blue-500' : 'border-orange-500',
    'block'
  ]
);
// (
//   // function Callback(props) {
//   //   console.log('callback', props);
//   // }
//   // ({ blue }: SquareProps): string[] => [
//   //   'border-b-2',
//   //   blue ? 'border-blue-500' : 'border-orange-500'
//   // ]
// );
