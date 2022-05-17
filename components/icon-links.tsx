import { Button, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5'

interface Props {
  size?: string
}

export const IconLinks: React.FC<Props> = ({ size }) => {
  return (
    <>
      <Link href="https://github.com/rosekamallove" target="_blank">
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoGithub} />
        </Button>
      </Link>
      <Link href="https://twitter.com/RoseKamalLove1" target="_blank">
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoTwitter} />
        </Button>
      </Link>
      <Link href="https://instagram.com/rosekamallove" target="_blank">
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoInstagram} />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
        target="_blank"
      >
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoLinkedin} />
        </Button>
      </Link>
    </>
  )
}
