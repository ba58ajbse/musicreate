import React, { ComponentType, useEffect } from 'react'
// import { Provider } from 'react-redux'
import { AppInitialProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Head from 'next/head'

// import { store } from '../store/store'
import theme from '../styles/theme'
import '../styles/css/global.css'
import Layout from '../layout/Layout'

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<AppInitialProps>
  pageProps: AppInitialProps
}): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <CssBaseLine />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Provider> */}
      </ThemeProvider>
    </>
  )
}

export default MyApp
