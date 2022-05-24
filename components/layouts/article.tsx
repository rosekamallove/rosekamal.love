import { Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../footer'
import { GridItemStyle } from '../grid-item'

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
            property="og:description"
            content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
          />
          <meta name="twitter:title" content={title} />
        </Head>
      )}
      {children}

      <GridItemStyle />
      <Box borderRadius="sm" bottom="0" p={1} align="center">
        <Divider width="45%" />
        <Footer />
      </Box>
    </>
  )
}

export default Layout
