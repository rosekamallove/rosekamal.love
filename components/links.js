import { Button, Heading, Icon, Link, List, ListItem } from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5'
import Section from '../components/section'

export const ConnectLinks = () => {
  return (
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        On the web
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/rosekamallove" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              @rosekamallove
            </Button>
          </Link>
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <Link href="https://twitter.com/RoseKamalLove1" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              @RoseKamalLove1
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://instagram.com/rosekamallove" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoInstagram} />}
            >
              @rosekamallove
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
            >
              LinkedIn
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
  )
}
