import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../styles/global.css'

import { AppProps } from 'next/app'
// import * as ga from '../lib/ga'

const Website = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      // ga.pageView(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <ChakraProvider theme={theme}> */}
      <Fonts />
      <Layout router={router} {...pageProps} />
      <Component {...pageProps} key={router.route} />
      {/* </ChakraProvider> */}
    </>
  )
}

export default Website
