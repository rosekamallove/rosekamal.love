import { Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Logo from '../../public/images/logo-light.png'
import Footer from '../footer'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

interface Props {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title} - Rose Kamal</title>
          <meta
            property="og:title"
            content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
          />
          <meta property="og:image" content={Logo.src} />
          <meta name="twitter:title" content={title} />
        </Head>
      )}
      {children}

      <GridItemStyle />
      <Box
        borderRadius="sm"
        // bg={useColorModeValue('whiteAlpha.500', '#323843')}
        bottom="0"
        p={1}
        align="center"
      >
        <Divider width="45%" />
        <Footer />
      </Box>
    </>
  )
}

export default Layout
