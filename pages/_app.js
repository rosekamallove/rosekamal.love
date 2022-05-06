import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../styles/global.css'

import { useEffect } from 'react'

import * as ga from '../lib/ga'

const Website = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageView(url)
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
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router} />
      <AnimatePresence exitBeforeEnter intial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default Website
