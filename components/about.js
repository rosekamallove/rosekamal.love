import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

export const About = () => {
  return (
    <div>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a full-stack developer with experience in the MERN stack and have
          also built a backend with Django. I like to Solve Problems,
          algorithmic as well as the problems I face while developing some cool
          projects like{' '}
          <NextLink href="https://youtemy.tech" passHref={true}>
            <Link>YouTemy</Link>
          </NextLink>{' '}
          I also have a knack for Music, I love to listen as well as create
          Music{' '}
          <NextLink
            href="https://soundcloud.com/user-276723683"
            passHref={true}
          >
            <Link>(SoundCloud)</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </div>
  )
}
