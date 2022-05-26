import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Flex, Spacer, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IconLinks } from './icon-links'
import Section from './section'

export const A = ({ children, href }) => (
  <a className="underline-offset-4  hover:underline font-semibold" href={href}>
    {children}
  </a>
)

export const About: React.FC = () => {
  return (
    <div>
      <Section delay="0.1">
        <Text mt="-15px" className="font-semibold">
          A sophomore pursuing B-Tech in CS&IT and a Full-Stack Developer
        </Text>
        <Text>
          I like solving problems, algorithmic as well as the ones I face when
          developing cool projects like{' '}
          <A href="https://youtemy.tech">YouTemy</A>. I love music, and am
          something of an &quot;HTML Coder&quot; in the world of music
          production too 😅 check out my
          <A href="https://soundcloud.com/user-276723683"> SoundCloud</A>. I
          also take awesome pictures as a hobby, check out my{' '}
          <A href="https://instagram.com/rosekamallove">Instagram</A>.
        </Text>
        <Text>
          I am currently making OCR accessible at{' '}
          <A href="https://trysolvio.ai/">Solvio</A> /{' '}
          <A href="https://trysolvio.ai/">BlendEd</A> as a Front-End Intern, and
          will help <A href="https://librehealth.io/">LibreHealth</A> build
          Libre Medical Record Systems this summer as an Open Source Contributor
          under the{' '}
          <A href="summerofcode.with.google.com">Google Summer of Code </A>
          Program ✨
        </Text>
        <Text>
          I write blog posts about <em>Internships</em>,{' '}
          <em>Web Development</em>, <em>Open Source</em>,<em> Productivity,</em>{' '}
          and more. <strong>Happy Reading </strong>☕
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
