import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Link, Spacer, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IconLinks } from './icon-links'
import Section from './section'

export const A = ({ children, href }) => (
  <a className="underline-offset-4 hover:underline font-semibold" href={href}>
    {children}
  </a>
)

export const About: React.FC = () => {
  return (
    <div>
      <Section delay="0.1">
        <Heading as="h3" size="md" variant="section-title">
          About Me
        </Heading>
        <Text>
          I, a sophomore pursuing B-Tech in CS&IT am a full-stack developer. I
          like solving problems, algorithmic as well as the ones I face when
          developing cool projects like{' '}
          <A href="https://youtemy.tech">YouTemy</A>. I have a knack for Music
          too, I love to listen as well as create Music{' '}
          <A href="https://soundcloud.com/user-276723683">(SoundCloud)</A>.
        </Text>
        <Text>
          I am currently making OCR accessible at{' '}
          <A href="https://trysolvio.ai/">Solvio</A> as as Front-End Intern, and
          will help <A href="https://librehealth.io/">LibreHealth</A> build
          Libre Medical Record Systems this summer as an Open Source Contribter
          under the{' '}
          <A href="summerofcode.with.google.com">Google Summer of Code </A>
          Program
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
