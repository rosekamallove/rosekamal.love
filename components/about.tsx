import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Spacer, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { IconLinks } from './icon-links'
import Section from './section'

export const A = ({ children, href }) => (
  <Link
    className="decoration-1 underline decoration-dashed underline-offset-2 font-semibold  hover:decoration-solid"
    href={href}
  >
    {children}
  </Link>
)

export const About: React.FC = () => {
  return (
    <div className="text-justify">
      <Section delay="0.1">
        <Text mt="-3px" className="font-semibold text-xl opacity-90">
          A sophomore pursuing B-Tech in CS&IT and a Full-Stack Developer
        </Text>
        <Text>
          I am a self taught full-stack web developer who loves applying his
          skills to develop cool projects like{' '}
          <A href="/projects/youtemy">YouTemy</A> And contribute to open-source.
          I love music, and am something of an <em>HTML Coder</em> myself, in
          the world of music production
          <A href="https://soundcloud.com/user-276723683"> (SoundCloud).</A>
        </Text>
        <Text>
          I take self proclaimed <em>awesome</em> pictures too, as a hobby{' '}
          <A href="https://instagram.com/rosekamallove">(Instagram)</A>.
        </Text>
        <Text>
          Currently making OCR accessible at{' '}
          <A href="https://trysolvio.ai/">Solvio</A> /{' '}
          <A href="https://blended.app/">BlendEd</A> as a Front-End Intern, and
          will help <A href="https://librehealth.io/">LibreHealthIO</A> build
          Libre Medical Record Systems this summer as an Open Source Contributor
          under the{' '}
          <A href="summerofcode.with.google.com">Google Summer of Code </A>
          Program ✨
        </Text>
        <Text>
          I write about Internships, Web Development, Open Source, Productivity,
          and more.
        </Text>
        <Text>
          <strong>Happy Reading </strong>☕
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
