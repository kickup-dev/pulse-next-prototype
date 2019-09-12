import App from 'next/app'
import React, {Fragment} from 'react'
import { Reset } from 'styled-reset';
import ThemeProvider from '../componentLibrary/ThemeProvider';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Reset/>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    )
  }
}