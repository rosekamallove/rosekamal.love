import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { BioSection, BioYear } from './bio'
import Section from './section'

export const TimeLine: React.FC = () => {
  /*
   * TODO:
   *
   * -> Making a JSON Object probably, to make the addition scalable
   * -> Timeline using Tailwind CSS && Chakra UI
   * https://flowbite.com/docs/components/timeline/#:~:text=The%20timeline%20component%20can%20be,from%20Tailwind%20CSS%20and%20Flowbite.
   */
  return (
    <Section delay="0.2">
      <Heading as="h3" variant="section-title">
        Timeline
      </Heading>

      {/* 2020 */}

      {/* 2020 */}

      <BioSection>
        <BioYear>2022</BioYear> Making OCR accessible at{' '}
        <Link href="https://trysolvio.ai/">Solvio</Link> /{' '}
        <Link href="https://blended.app/">BlendEd</Link> as a Front-End Intern,
        and will help <Link href="https://librehealth.io/">LibreHealthIO</Link>{' '}
        build Libre Medical Record Systems this summer as an Open Source
        Contributor under the{' '}
        <Link href="https://summerofcode.withgoogle.com/">
          Google Summer of Code{' '}
        </Link>
        Program ✨
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear> Built two awesome projects
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
      <BioSection>
        <BioYear>2020</BioYear> Graduated my 12th, and took admission in
        <NextLink href="https://mjpru.ac.in/" passHref={true}>
          <Link> MJPRU </Link>
        </NextLink>
        as a Bachelor in Computer Science and Information Technology and Started
        learning basics of programming and Web Development
      </BioSection>
      <BioSection>
        <BioYear>2003</BioYear>
        Born in Bareilly, India.
      </BioSection>
    </Section>
  )
}
