import { createGlobalStyle } from './index';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }): string => theme.font.family.primary};
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;
