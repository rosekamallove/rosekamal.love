import { Box, Container, Heading } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Link from 'next/dist/client/link'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
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
      </Head>
      <Container maxW="container.lg">
        <Heading variant="h2">{postData.title}</Heading>
        <div>
          <Date dateString={postData.date} />
        </div>
        {/* <ReactMarkdown components={(ChakraUIRenderer(), SyntaxHighlight)}> */}
        <ReactMarkdown
          escapeHtml={true}
          components={ChakraUIRenderer()}
          remarkPlugins={[remarkGfm]}
        >
          {postData.contentHtml}
        </ReactMarkdown>
        <Box pt={4} pb={4}>
          <Link href="/blogs">
            <a>
              <strong>← Back to Blogs</strong>
            </a>
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}
