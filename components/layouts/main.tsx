import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { AppProps } from 'next/app.js'
import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'

interface Props extends AppProps {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children, router }) => {
  const logoImg = `/images/logo${useColorModeValue('-light', '-dark')}.png`

  if (router.pathname === '/') return <div />

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="shortcut icon" href={logoImg} />
        <meta
          name="description"
          content="Rose Kamal Love's Personal Blog / Portfolio"
        />
        <meta name="author" content="Rose Kamal Love" />
        <meta name="twitter:title" content="Rose Kamal Love" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RoseKamalLove1" />
        <meta name="twitter:creator" content="@RoseKamalLove1" />
        <meta property="og:site_name" content="Rose Kamal Love" />
        <meta name="og:title" content="Rose Kamal Love" />
        <meta property="og:type" content="website" />
        <title>Rose Kamal Love - Blog</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
