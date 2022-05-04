import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'
// import 'prismjs/themes/prism-dark.css'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../node_modules/highlight.js/styles/atom-one-dark.css'
import '../styles/global.css'

const Website = ({ Component, pageProps, router }) => {
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
