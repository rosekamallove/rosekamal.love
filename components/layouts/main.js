import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="shortcut icon" href={logoImg} />
        <title>Rose Kamal Love</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
