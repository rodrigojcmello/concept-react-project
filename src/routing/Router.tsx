import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { __RouterContext } from 'react-router';
import * as H from 'history';
import { renderRoutes } from 'react-router-config';
import styled from '@emotion/styled';
import routes from './routes';

const ScreenContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const ScreenAnimated = styled(animated.div)`
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

declare global {
  interface Window {
    firstAnimationScreen: boolean;
  }
}

(window as Window).firstAnimationScreen = false;

function Routes(): JSX.Element {
  const { location } = useContext(__RouterContext);

  useEffect((): void => {
    if (location.pathname !== '/') {
      window.firstAnimationScreen = true;
    }
  }, [location]);

  const transitions = useTransition(
    location,
    (l: H.Location): string => l.pathname,
    {
      unique: true,
      from: {
        opacity: 0,
        transform: window.firstAnimationScreen
          ? 'translate3d(50%,0,0)'
          : 'translate3d(0%,0,0)',
        zIndex: 0
      },
      enter: {
        opacity: 1,
        transform: 'translate3d(0%,0,0)',
        zIndex: 1
      },
      leave: {
        opacity: 0,
        transform: window.firstAnimationScreen
          ? 'translate3d(-25%,0,0)'
          : 'translate3d(0%,0,0)',
        zIndex: 0
      }
    }
  );

  return (
    <Route
      render={(): JSX.Element => (
        <ScreenContainer>
          {transitions.map(
            ({ item, props, key }): JSX.Element => (
              <ScreenAnimated key={key} style={props}>
                <Switch location={item}>{renderRoutes(routes)}</Switch>
              </ScreenAnimated>
            )
          )}
        </ScreenContainer>
      )}
    />
  );
}

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
