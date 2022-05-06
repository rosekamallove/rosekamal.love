import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { About } from '../components/about'
import Footer from '../components/footer'
import { GridItem } from '../components/grid-item'
import { BasicIntro } from '../components/intro'
import Layout from '../components/layouts/article'
import { ConnectLinks } from '../components/links'
import Paragraph from '../components/paragraph'
import { RenderBlogs } from '../components/render-blog-list'
import Section from '../components/section'
import { TimeLine } from '../components/timeline'
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
        <BasicIntro />
        <About />

        {/* Recent Blogs */}
        <Heading variant="section-title">Latest Blogs</Heading>
        <RenderBlogs
          allPostsData={allPostsData}
          rendeDescription={false}
          count={3}
        />
        <NextLink href="/blogs">
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            variant="ghost"
          >
            Read All Blogs
          </Button>
        </NextLink>

        <TimeLine />

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

        <ConnectLinks />

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Featured
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={0}>
            <Center>
              <GridItem
                href="/projects/youtemy"
                title="YouTemy"
                thumbnail={youtemy}
              >
                A great way to learn from YouTube courses without any
                distractions and the ability to enroll in courses and track them
                with a daily streak to become more consistent.
              </GridItem>
            </Center>
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
