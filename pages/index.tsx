import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { About } from '../components/about'
import { GridItem } from '../components/grid-item'
import { BasicIntro } from '../components/intro'
import Layout from '../components/layouts/article'
import { RenderBlogs } from '../components/render-blogs'
import Section from '../components/section'
import { getSortedPostsData } from '../lib/posts'
import youtemy from '../public/images/youtemy.png'

export default function Page({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>About - Rose Kamal Love</title>
        <meta property="og:title" content={'About - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamallove.vercel.app/images/rosek.jpg"
        />
        <meta
          property="og:description"
          content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
        />
      </Head>
      <Container maxW="container.md">
        <Section delay="0.0">
          <BasicIntro />
          <About />
        </Section>

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Featured Blogs
          </Heading>
          <RenderBlogs
            allPostsData={allPostsData}
            featured={true}
            renderDescription={false}
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
        </Section>
        <Section delay="0.3">{/*<TimeLine />*/}</Section>

        <Section delay="0.4">
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
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
