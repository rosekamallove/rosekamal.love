import { Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../footer'
import { GridItemStyle } from '../grid-item'

interface Props {
  _title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, _title }) => {
  return (
    <>
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
