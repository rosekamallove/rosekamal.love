import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface Props {
  children: React.ReactNode
  delay: string
}

const Section: React.FC<Props> = ({ children, delay = '0' }) => {
  delay = '0'
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0', delay: delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
