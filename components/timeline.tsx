import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { BioSection, BioYear } from './bio'
import Section from './section'

export const TimeLine: React.FC = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>2003</BioYear>
        Born in Bareilly, India.
      </BioSection>

      {/* 2020 */}

      <BioSection>
        <BioYear>2020</BioYear>
        Graduated my 12th, and took admission in
        <NextLink href="https://mjpru.ac.in/" passHref={true}>
          <Link> MJPRU </Link>
        </NextLink>
        as a Bachelor in Computer Science and Information Technology and Started
        learning basics of programming and Web Development
      </BioSection>

      {/* 2020 */}

      <BioSection>
        <BioYear>2021</BioYear>
        Built two awesome projects
        <NextLink
          href="https://github.com/rosekamallove/music-expanse"
          passHref={true}
        >
          <Link> music-expanse </Link>
        </NextLink>
        &
        <NextLink
          href="https://github.com/rosekamallove/youtemy"
          passHref={true}
        >
          <Link> youtemy {'\n'}</Link>
        </NextLink>
        and got selected as one of the 150 MLH Fellows out of 20k+ applicants
        worldwide at
        <NextLink href="https://fellowship.mlh.io" passHref={true}>
          <Link> MLH Fellowship </Link>
        </NextLink>
        and also won the 3 week Sprint Hackathon and have been Contributing to
        <NextLink href="https://github.com/ljharb/repo-report" passHref={true}>
          <Link> repo-report </Link>
        </NextLink>{' '}
        and
        <NextLink href="https://github.com/enzymejs/enzyme" passHref={true}>
          <Link> enzyme.js </Link>
        </NextLink>
      </BioSection>
    </Section>
  )
}
