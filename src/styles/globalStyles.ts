import theme from './theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  html,
  body {
    width: 100%;
  }
  body {
    font-family: ${theme.global.font};
    font-weight: ${theme.global.fontWeight};
    font-size: ${theme.global.fontSize};
    line-height: ${theme.global.lineHeight};
    color: ${theme.global.textColor};
    text-align: left;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  a {}
  h1 {}
  h2 {}
  
  a, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
