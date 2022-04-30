import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect } from 'react'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

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
            <title>{title} - Rose Kamal Love</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
