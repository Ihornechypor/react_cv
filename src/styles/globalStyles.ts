import { createGlobalStyle } from 'styled-components';
import theme, { themeColors } from './theme';

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
    margin: 0;
    padding: 0;
    font-family: ${theme.global.font};
    font-weight: ${theme.global.fontWeight};
    font-size: ${theme.global.fontSize};
    line-height: ${theme.global.lineHeight};
    color: ${theme.global.textColor};
    text-align: left;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }
  
  a {
    color: ${theme.global.textColor};
  }

  ul {
    padding-left: 30px;
    margin: 0;
  }

  h1 {}
  h2 {}
  h1,h2,h3 { margin:0 }
  
  
  a, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
