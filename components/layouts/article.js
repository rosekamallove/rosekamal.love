import { Box, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Logo from '../../public/images/logo-light.png'
import Footer from '../footer'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - roseKamalLove</title>
            <meta property="og:image" content={Logo} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
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
    </motion.article>
  )
}

export default Layout
