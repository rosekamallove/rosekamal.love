import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { RenderBlogs } from '../components/render-blogs'
import Section from '../components/section'
import { SmallIntro } from '../components/small-intro'
import { getSortedPostsData } from '../lib/posts'
import youtemy from '../public/images/youtemy.png'

export default function Page({ allPostsData }: { allPostsData: any }) {
  return (
    <Layout>
      <Head>
        <title>Rose Kamal Love</title>
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
      <div className="overflow-hidden relative">
        <SVGBackground />
        <Container maxW="container.md">
          <Section delay="0.0">
            <SmallIntro />
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

          {/*<Section delay="0.4">
            <Heading as="h3" variant="section-title">
              Featured
            </Heading>
            <SimpleGrid columns={[1, 1, 1]} gap={0}>
              <Center className="m-0 py-5 rounded-[8px] transition-all hover:shadow-md">
                <GridItem
                  href="/projects/youtemy"
                  title="YouTemy"
                  thumbnail={youtemy}
                >
                  A great way to learn from YouTube courses without any
                  distractions and the ability to enroll in courses and track
                  them with a daily streak to become more consistent.
                </GridItem>
              </Center>
            </SimpleGrid>
          </Section> */}
        </Container>
      </div>
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

export const SVGBackground = () => (
  <div className="relative h-full translate-y-80 max-w-sm md:max-w-lg -z-10 mx-auto">
    <svg
      className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`${useColorModeValue(
              'text-gray-200',
              'text-[#282c34]'
            )}`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
    <svg
      className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`${useColorModeValue(
              'text-gray-200',
              'text-[#282c34]'
            )}`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={784}
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  </div>
)
