import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Head from 'next/head'
import NextLink from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Date from '../../components/date'
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
  const url = `https://rosekamallove.vercel.app/blogs/${id}`
  return (
    <Layout>
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
              width="100%"
              marginBottom="20px"
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
        <Box pt={4} pb={4}>
          <NextLink href="/blogs">
            <Button variant="ghost" colorScheme="teal" href="/blogs">
              <a>
                <strong>← Back to Blogs</strong>
              </a>
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}
