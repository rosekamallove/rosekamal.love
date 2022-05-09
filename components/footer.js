import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      bg={useColorModeValue('whiteAlpha.500', '#323843')}
    >
      &copy; {new Date().getFullYear()} Rose Kamal Love, All Rights Reserved.
    </Box>
  )
}

export default Footer
