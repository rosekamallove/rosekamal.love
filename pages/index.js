import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whilteAlpha.500', 'whiteAlpha.300')}
        mb={6}
        p={3}
        align="center"
      >
        Hello There, I&apos;m a full-stack developer based in India
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rose Kamal Love
          </Heading>
          <p>{'{ Developer / Hobyist Photographer / Music Enthusiast }'}</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="/images/rosek.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
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
            href="https://soundcloud.com/user-276723683/teleported?si=aae145b46bfb443b9b2583bc35bae98b"
            passHref={true}
          >
            <Link>(Teleported)</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Bareilly, India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated my 12th, and took admission in
          <NextLink href="https://mjpru.ac.in/" passHref={true}>
            <Link> MJPRU </Link>
          </NextLink>
          as a Bachelor in Computer Science and Information Technology and
          Started learning basics of programming and Web Development
        </BioSection>
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
          <NextLink
            href="https://github.com/ljharb/repo-report"
            passHref={true}
          >
            <Link> repo-report </Link>
          </NextLink>{' '}
          and
          <NextLink href="https://github.com/enzymejs/enzyme" passHref={true}>
            <Link> enzyme.js </Link>
          </NextLink>
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
