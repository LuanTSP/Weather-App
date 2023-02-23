import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes'

const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    *:focus {
      outline: none;
    }
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Open Sans";
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={themes.dark}>
    <GlobaStyle />
    <App />
  </ThemeProvider>
  
);
