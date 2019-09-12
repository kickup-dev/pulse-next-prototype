import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import theme from '../theme';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html>
        <Head>
          {/* Add any external CDN dependencies here. */}
        </Head>
        <body>
          <Reset />
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </Html>
    )
  }
}
