import { Button, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

interface Props {
  size?: string
}

export const IconLinks: React.FC<Props> = ({ size }) => {
  return (
    <>
      <Link href="https://instagram.com/rosekamallove" target="_blank">
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoInstagram} />
        </Button>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCIcZjoMa7k1w63XlP1qGbQQ"
        target="_blank"
      >
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoYoutube} />
        </Button>
      </Link>
      <Link href="https://twitter.com/RoseKamalLove1" target="_blank">
        <Button variant="ghost" colorScheme="teal" size={size ? size : 'sm'}>
          <Icon as={IoLogoTwitter} />
        </Button>
      </Link>
    </>
  )
}
