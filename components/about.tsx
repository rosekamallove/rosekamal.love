import { Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { IconLinks } from './icon-links'
import Section from './section'
import NextLink from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'

export const A = ({
  children,
  href
}: {
  children: ReactNode
  href: string
}) => (
  <a
    target="_blank"
    rel="noreferrer"
    className="font-semibold hover:underline"
    href={href}
  >
    {children}
  </a>
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
          <A href="https://soundcloud.com/user-276723683"> (SoundCloud)</A>
        </Text>
        <Text>
          I take self proclaimed <em>awesome</em> pictures too, as a hobby{' '}
          <A href="https://instagram.com/rosekamallove">(Instagram)</A>
        </Text>
        <Text>
          Currently making OCR accessible at{' '}
          <A href="https://trysolvio.ai/">Solvio</A> /{' '}
          <A href="https://blended.app/">BlendEd</A> as a Front-End Intern, and
          will help <A href="https://librehealth.io/">LibreHealthIO</A> build
          Libre Medical Record Systems this summer as an Open Source Contributor
          under the{' '}
          <A href="https://summerofcode.withgoogle.com/">
            Google Summer of Code{' '}
          </A>
          Program
        </Text>
        <Text>
          I have been an Open Source Developer under the{' '}
          <A href="https://fellowship.mlh.io">MLH Fellowship Program</A> in
          which only <strong>150 out of 35000</strong> Applicants worldwide got
          selected. I contributed to{' '}
          <A href="https://github.com/ljharb/repo-report">repo-report</A> which
          is a CLI to list all repos a user has access to, and report on their
          configuration in aggregate.
        </Text>
        <Text>
          Before all this cool stuff I had been a student of the{' '}
          <A href="fellowship.mlh.io">MLH Pre Fellowship</A> in which I leart a
          tonne while working with awesome people. I also <em>won</em> the 3
          week long sprint <em>hackathon</em> in which I built the MVP for{' '}
          <A href="projects/youtemy">Youtemy</A>
        </Text>
        <Text>
          I write about Internships, Web Development, Open Source, Productivity,
          and more.
          <br />
        </Text>
        <Flex my={8}>
          <IconLinks size="md" />
          <Spacer />
          <NextLink href="/projects">
            <Button
              mx={5}
              variant="ghost"
              rightIcon={<IoArrowForwardOutline />}
              colorScheme="teal"
            >
              Portfolio
            </Button>
          </NextLink>
        </Flex>
      </Section>
    </div>
  )
}
