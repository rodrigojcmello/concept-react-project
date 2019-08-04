import { createGlobalStyle } from 'styled-components';
import dark from './mode/dark';
import light from './mode/light';
import theme from './theme';

export default createGlobalStyle`
  :root {
    --contrast0: ${light.contrast0};
    --contrast1000: ${light.contrast1000};
    --teste: red;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --contrast0: ${dark.contrast0};
      --contrast1000: ${dark.contrast1000};
    }
  }

  body {
    font-family: ${theme.family};
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    color: var(--contrast1000);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  body,
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre,
  ol,
  ul {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
`;
