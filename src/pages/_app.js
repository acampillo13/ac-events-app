import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/globals.scss';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;