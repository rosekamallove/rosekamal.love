import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Date from '../components/date'
import Footer from '../components/footer'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { getSortedPostsData } from '../lib/posts'
import youtemy from '../public/images/youtemy.png'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Page = ({ allPostsData }) => {
  return (
    <Layout>
      <Container maxW="container.lg">
        {/* Intro Section*/}
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', '#323843')}
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

        {/* About Section */}

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a full-stack developer with experience in the MERN stack and
            have also built a backend with Django. I like to Solve Problems,
            algorithmic as well as the problems I face while developing some
            cool projects like{' '}
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

        {/* Recent Blogs */}
        <Heading variant="section-title">Latest Blogs</Heading>
        <List>
          {allPostsData.map(({ id, date, title }, index) => {
            if (index < 3) {
              return (
                <ListItem key={id}>
                  <Box
                    borderRadius="lg"
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue('whiteAlpha.500', '#323843')}
                    mb={2}
                    p={2}
                  >
                    <NextLink href={`/blogs/${id}`}>
                      <Link>
                        <strong>{title}</strong>
                      </Link>
                    </NextLink>
                    <Box>
                      <Date dateString={date} />
                    </Box>
                    {/* {description ? <Text fontSize="sm">{description}</Text> : ''} */}
                  </Box>
                </ListItem>
              )
            } else {
              return ''
            }
          })}
          <NextLink href="/blogs">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="ghost"
            >
              Read All Blogs
            </Button>
          </NextLink>
        </List>

        {/* TimeLine Section*/}
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
            as a Bachelor in Computer Science and Information Technology and
            Started learning basics of programming and Web Development
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
            and got selected as one of the 150 MLH Fellows out of 20k+
            applicants worldwide at
            <NextLink href="https://fellowship.mlh.io" passHref={true}>
              <Link> MLH Fellowship </Link>
            </NextLink>
            and also won the 3 week Sprint Hackathon and have been Contributing
            to
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

        {/* I Love Section */}

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love ♥
          </Heading>
          <Paragraph>
            <Link href="https://soundcloud.com/rosekmallove" target="_blank">
              Music
            </Link>
            ,{' '}
            <Link href="https://instagram.com/rosekamallove" target="_blank">
              Photography
            </Link>
            , Development, Vim
          </Paragraph>
        </Section>

        {/* Web Links Section */}
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

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Featured
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={0}>
            <GridItem
              href="https://youtemy.tech"
              title="YouTemy"
              thumbnail={youtemy}
            >
              A great way to learn from YouTube courses without any distractions
              and the ability to enroll in courses and track them with a daily
              streak to become more consistent.
            </GridItem>
          </SimpleGrid>
        </Section>

        <Box
          borderRadius="lg"
          bg={useColorModeValue('whilteAlpha.500', 'whiteAlpha.300')}
          mb={6}
          p={3}
          align="center"
        >
          <Footer />
        </Box>
      </Container>
    </Layout>
  )
}

export default Page
