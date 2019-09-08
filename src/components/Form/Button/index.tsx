import React from 'react';
import { ButtonProps } from './type';
import Styled, { CSS } from '../../Styled';

function Button({ className, text }: ButtonProps): JSX.Element {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
}

export default Styled<ButtonProps & CSS>(Button);
