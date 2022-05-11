import { Box } from '@chakra-ui/react'
import { IconLinks } from './icon-links'

const Footer = () => {
  return (
    <>
      <IconLinks />
      <Box align="center" fontSize="xs" opacity={0.5}>
        Copyright &copy; {new Date().getFullYear()} • Rose Kamal Love
      </Box>
    </>
  )
}

export default Footer
