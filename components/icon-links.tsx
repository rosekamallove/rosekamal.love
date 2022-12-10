import { Button, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoTwitter,
  IoLogoYoutube
} from 'react-icons/io5'

interface Props {
  size?: string
}

export const IconLinks: React.FC<Props> = ({ size }) => {
  return (
    <>
      {socials.map(s => {
        return (
          <Link href={s.href} target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              size={size ? size : 'sm'}
            >
              {s.logo}
            </Button>
          </Link>
        )
      })}
    </>
  )
}

export const socials = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCIcZjoMa7k1w63XlP1qGbQQ',
    logo: <IoLogoYoutube />
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rosekamallove',
    logo: <IoLogoInstagram />
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/RoseKamalLove1',
    logo: <IoLogoTwitter />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rose-kamal-love-1146141b0/',
    logo: <IoLogoLinkedin />
  }
]
