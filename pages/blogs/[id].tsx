/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Link,
  useToast
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Head from 'next/head'
import NextLink from 'next/link'
import React, { useState } from 'react'
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

import { GetStaticPaths, GetStaticProps } from 'next'
import { newTheme } from '../../components/chakra-md-theme'
import { MinutesRead } from '../../components/minutes-read'
import { RenderTags } from '../../components/render-tags'
import postData from '../../interfaces/postData'
import { ReadingProgress } from '../../components/reading-progress'

interface Props {
  postData: postData
  id: string
}

const Post: React.FC<Props> = ({ postData, id }) => {
  const toast = useToast()
  const toast_id = 'feedback-toast'
  const url = `https://rosekamallove.vercel.app/blogs/${id}`

  const [count, setCount] = useState(0)

  /*
   * TODO
   *
   * [ Create a Scroll indicator ]
   * https://www.youtube.com/watch?v=X1PI52QLanE
   *
   * Probably add debouncing: when the user stops scrolling
   */

  const _reachedBottom = () => {
    if (count < 1 && !toast.isActive(toast_id)) {
      toast({
        title: 'Please send feedback',
        description: 'It will help me immensely in my growth ❤️ ',
        variant: 'solid',
        position: 'top-right',
        isClosable: true,
        id: toast_id
      })
      setCount(count + 1)
    }
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description}></meta>
        <meta property="og:title" content={postData.title}></meta>
        <meta property="og:url" content={url}></meta>
        <meta
          property="og:description"
          content={postData.og_description}
        ></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content={postData.cover_image}></meta>
      </Head>

      <ReadingProgress />

      <Container maxW="container.md">
        <article>
          <Section delay="0.1">
            <Heading as="h1" mb={5}>
              {postData.title}
            </Heading>
            <Box className="font-semibold">
              <Date dateString={postData.date} /> {' • '}
              <MinutesRead string={postData.contentHtml} words={null} />
              {' • '}Read on
              <Link
                mx="2"
                href={`https://dev.to/rosekamallove/${postData.devUrl}`}
              >
                dev.to
              </Link>
            </Box>
            <Box mb="5">
              <RenderTags tagArray={postData.tags.split(',')} />
            </Box>
            <ReactMarkdown
              components={ChakraUIRenderer(newTheme)}
              remarkPlugins={[remarkGfm, remarkHeadingId]}
              rehypePlugins={[rehypeRaw]}
              skipHtml
            >
              {postData.contentHtml}
            </ReactMarkdown>
            <Flex pt={2} pb={0}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
      id: params.id
    }
  }
}

export default Post
