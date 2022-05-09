import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  Heading,
  useToast
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Image from 'next/dist/client/image'
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Date from '../../components/date'
import { FeedbackModal } from '../../components/feedback-modal'
import Layout from '../../components/layouts/article'
import { getAllPostIds, getPostData } from '../../lib/posts'

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

const newTheme = {
  blockquote: props => {
    const { children } = props
    return (
      <Alert status="info" variant="left-accent">
        {children}
      </Alert>
    )
  },
  pre: props => {
    const { children } = props
    return <>{children}</>
  }
}

export default function Post({ postData, id }) {
  const toast = useToast()
  const url = `https://rosekamallove.vercel.app/blogs/${id}`

  const [count, setCount] = useState(0)

  const reachedBottom = () => {
    if (count < 1) {
      toast({
        description:
          'Please do provide some feedback, it is crucial to my growth 😅',
        variant: 'solid',
        position: 'bottom-right',
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
        <Center>
          {postData.cover_image ? (
            <Image
              borderRadius="2px"
              width={1000}
              height={400}
              src={postData.cover_image}
              alt="Cover Image"
            />
          ) : (
            ''
          )}
        </Center>
        <Heading variant="h2">{postData.title}</Heading>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          components={ChakraUIRenderer(newTheme)}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml
        >
          {postData.contentHtml}
        </ReactMarkdown>
        <Alert status="info" colorScheme="teal" variant="left-accent">
          <AlertIcon />
          “Feedback is a gift. Ideas are the currency of our next success. Let
          people see you value both feedback and ideas.”
        </Alert>
        <Box pt={2} pb={4}>
          <NextLink href="/blogs">
            <Button variant="ghost" colorScheme="teal" href="/blogs">
              <a>← Back to Blogs</a>
            </Button>
          </NextLink>
          <FeedbackModal id={id} />
        </Box>
      </Container>
    </Layout>
  )
}
