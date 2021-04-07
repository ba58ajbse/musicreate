import React, { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { AppInitialProps } from 'next/app'

import { store } from '../store/store'

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<AppInitialProps>
  pageProps: AppInitialProps
}): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
