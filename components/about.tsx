import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IconLinks } from './icon-links'
import Section from './section'

export const About: React.FC = () => {
  return (
    <div>
      <Section delay="0.1">
        <Heading as="h3" size="md" variant="section-title">
          About Me
        </Heading>
        <Text>
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
        </Text>
        <Flex my={4}>
          <IconLinks size="md" />
          <Spacer />
          <NextLink href="/projects">
            <Button
              mx={5}
              variant="ghost"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Portfolio
            </Button>
          </NextLink>
        </Flex>
      </Section>
    </div>
  )
}