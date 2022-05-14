/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  useToast
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-heading-id'
import Date from '../../components/date'
import { FeedbackModal } from '../../components/feedback-modal'
import HitCounter from '../../components/hit-counter'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { getAllPostIds, getPostData } from '../../lib/posts'

import { newTheme } from '../../components/chakra-md-theme'
import { MinutesRead } from '../../components/minutes-read'

export default function Post({ postData, id }) {
  const toast = useToast()
  const url = `https://rosekamallove.vercel.app/blogs/${id}`

  const [count, setCount] = useState(0)

  const reachedBottom = () => {
    if (count < 1) {
      toast({
        title: 'Please send feedback',
        description: 'It will help me immensely in my growth ❤️ ',
        variant: 'solid',
        position: 'top-right',
        isClosable: true
      })
      setCount(count + 1)
    }
  }
  const scrollRef = useBottomScrollListener(reachedBottom)

  return (
    <Layout ref={scrollRef}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description}></meta>
        <meta property="og:url" content={url}></meta>
        <meta property="og:description" content={postData.og_description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postData.cover_image} />
      </Head>

      <Container maxW="container.lg">
        <article>
          <Section delay={0.1}>
            <Heading as="h1" mb={5}>
              {postData.title}
            </Heading>
            <Date dateString={postData.date} /> {' • '}
            <MinutesRead string={postData.contentHtml} />
            <ReactMarkdown
              components={ChakraUIRenderer(newTheme)}
              remarkPlugins={[remarkGfm, remarkHeadingId]}
              rehypePlugins={[rehypeRaw]}
              skipHtml
            >
              {postData.contentHtml}
            </ReactMarkdown>
            <Flex pt={2} pb={0} wrap>
              <NextLink href="/blogs">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  href="/blogs"
                  size="sm"
                >
                  <a>← Back to Blogs</a>
                </Button>
              </NextLink>
              <FeedbackModal id={id} />
              <Spacer />
              <HitCounter published={postData.published} slug={id} />
            </Flex>
          </Section>
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
      id: params.id
    }
  }
}
