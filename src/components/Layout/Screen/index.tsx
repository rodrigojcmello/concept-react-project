/* eslint-disable react/display-name */
import React from 'react';
import { ScreenProps } from './types';
import ScreenContainer from './style';

export default function Screen({ children }: ScreenProps): JSX.Element {
  return <ScreenContainer>{children}</ScreenContainer>;
}
