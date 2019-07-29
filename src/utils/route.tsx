/* eslint-disable import/prefer-default-export,react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';

const token = false;

export function isAuth(component: React.ComponentType): React.ComponentType {
  if (token) {
    return component;
  }
  return (): JSX.Element => <Redirect to="/screen-3" />;
}
