/* eslint-disable react-hooks/rules-of-hooks */
import {
  Alert,
  Box,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { IoCopy } from 'react-icons/io5'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Date from '../../components/date'
import { FeedbackModal } from '../../components/feedback-modal'
import HitCounter from '../../components/hit-counter'
import { IconLinks } from '../../components/icon-links'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { copyTextToClipboard } from '../../lib/copy-to-clipboard'
import { getAllPostIds, getPostData } from '../../lib/posts'
import wordCounter from '../../lib/word-counter'
import light from '../../node_modules/react-syntax-highlighter/dist/esm/styles/prism/coldark-cold'
import dark from '../../node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark'

const newTheme = {
  blockquote: props => {
    const { children } = props
    return (
      <Alert status="info" variant="left-accent">
        {children}
      </Alert>
    )
  },
  code: props => {
    const toast = useToast()
    const { children, className } = props
    const classArray = className == undefined ? '' : className.split('-')
    const theme = useColorModeValue('light', 'dark')

    if (classArray == '') {
      return (
        <Code
          margin="2px"
          fontSize="95%"
          borderRadius="5px"
          background={useColorModeValue('#E2EAF2', '#414650')}
          bg={null}
        >
          {children}
        </Code>
      )
    }

    return (
      <Box>
        <Box align="right" marginTop="0.5">
          {classArray[1] === 'txt' ? (
            ''
          ) : (
            <Button
              size="xs"
              borderRadius="sm"
              fontFamily="Poppins"
              color={useColorModeValue('#282c34', '#abb2bf')}
              bg={useColorModeValue('#E2EAF2', '#282c34')}
              onClick={() => {
                copyTextToClipboard(children)
                toast({
                  description: 'Copied to clipboard successfully!',
                  position: 'top-right',
                  variant: 'left-accent'
                })
              }}
              leftIcon={<IoCopy />}
            >
              Copy to Clipboard
            </Button>
          )}
        </Box>
        <Prism
          language={classArray[1]}
          style={theme == 'dark' ? dark : light}
          showLineNumbers={true}
          customStyle={{ fontSize: '15px' }}
        >
          {children}
        </Prism>
      </Box>
    )
  }
}

export default function Post({ postData, id }) {
  const toast = useToast()
  const url = `https://rosekamallove.vercel.app/blogs/${id}`

  const [count, setCount] = useState(0)

  const reachedBottom = () => {
    if (count < 1) {
      toast({
        title: 'Please send feedback',
        description: 'It will help me immensely in my growth ❤️ ',
        variant: 'left-accent',
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

      <Container maxW="container.md">
        <article>
          <Section delay={0.1}>
            <Heading variant="h2">{postData.title}</Heading>
            <div>
              <Date dateString={postData.date} />
              {' • '}
              <strong>
                ☕ {Math.ceil(wordCounter(postData.contentHtml) / 225)}{' '}
                {Math.ceil(wordCounter(postData.contentHtml) / 255) == 1
                  ? 'minute'
                  : 'minutes'}{' '}
                read
              </strong>
            </div>
            <ReactMarkdown
              components={ChakraUIRenderer(newTheme)}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              skipHtml
            >
              {postData.contentHtml}
            </ReactMarkdown>
            <Flex pt={2} pb={0} wrap>
              <NextLink href="/blogs">
                <Button variant="ghost" colorScheme="teal" href="/blogs">
                  <a>← Back to Blogs</a>
                </Button>
              </NextLink>
              <FeedbackModal id={id} />
            </Flex>
            <Flex borderRadius="sm" mb={6} p={3}>
              <IconLinks />
              <Spacer />
              <HitCounter slug={id} />
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
