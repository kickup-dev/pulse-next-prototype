
import App from 'next/app'
import React, {Fragment} from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset';
import theme from '../theme';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Reset/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    )
  }
}