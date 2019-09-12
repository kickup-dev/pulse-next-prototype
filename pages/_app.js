import App from 'next/app'
import React, {Fragment} from 'react'
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components'
import { theme } from '../componentLibrary/ThemeProvider'

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