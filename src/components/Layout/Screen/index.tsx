/* eslint-disable react/display-name */
import React from 'react';
import { ScreenProps } from './types';
import { ScreenContainer } from './style';

export default function Screen({ children, color }: ScreenProps): JSX.Element {
  return <ScreenContainer color={color}>{children}</ScreenContainer>;
}
