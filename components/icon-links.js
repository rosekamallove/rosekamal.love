import { Button, Icon, Link } from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5'

export const IconLinks = () => {
  return (
    <>
      <Link href="https://github.com/rosekamallove" target="_blank">
        <Button variant="ghost" colorScheme="teal">
          <Icon as={IoLogoGithub} />
        </Button>
      </Link>
      <Link href="https://twitter.com/RoseKamalLove1" target="_blank">
        <Button variant="ghost" colorScheme="teal">
          <Icon as={IoLogoTwitter} />
        </Button>
      </Link>
      <Link href="https://instagram.com/rosekamallove" target="_blank">
        <Button variant="ghost" colorScheme="teal">
          <Icon as={IoLogoInstagram} />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
        target="_blank"
      >
        <Button variant="ghost" colorScheme="teal">
          <Icon as={IoLogoLinkedin} />
        </Button>
      </Link>
    </>
  )
}
