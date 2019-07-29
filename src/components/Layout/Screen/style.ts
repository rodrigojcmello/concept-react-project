/* eslint-disable import/prefer-default-export */
import styled from '../../../assets/styled-components';

export const ScreenContainer = styled.div<{ color?: string }>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  //background-color: ${({ color }): string => color || 'blueviolet'};
`;
