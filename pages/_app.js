import App from 'next/app';
import React, {Fragment} from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { theme } from '../componentLibrary/ThemeProvider';
import '@fortawesome/fontawesome-pro/css/regular.css';
import '@fortawesome/fontawesome-pro/css/light.css';
import '@fortawesome/fontawesome-pro/css/brands.css';
import '@fortawesome/fontawesome-pro/css/solid.css';
import '@fortawesome/fontawesome-pro/css/fontawesome.css';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Reset />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    )
  }
}