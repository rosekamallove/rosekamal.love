import { Box } from '@chakra-ui/react'
import React from 'react'
import { IconLinks } from './icon-links'

const Footer: React.FC = () => {
  return (
    <>
      <IconLinks size="md" />
      <Box align="center" fontSize="xs" opacity={0.5}>
        Copyright &copy; {new Date().getFullYear()} • Rose Kamal Love
      </Box>
    </>
  )
}

export default Footer
