import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Layout from './components/common/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <Global styles={GlobalStyle} />
        <Router />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
);
