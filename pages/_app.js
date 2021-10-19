import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router />
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
