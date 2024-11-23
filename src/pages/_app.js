import 'bootstrap/dist/css/bootstrap-grid.min.css'; // Importa solo el CSS del grid
import '../styles/globals.scss';  // Si tienes estilos globales personalizados en SCSS
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;