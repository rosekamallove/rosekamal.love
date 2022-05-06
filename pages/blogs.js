import { Box, Code, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { RenderBlogs } from '../components/render-blog-list'
import { getSortedPostsData } from '../lib/posts'

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
      <Code>This is Code from Charka</Code>
      <Container maxW="container.lg">
        <Heading as="h3">Blogs</Heading>
        <Box p={15}></Box>
        <RenderBlogs
          allPostsData={allPostsData}
          rendeDescription={true}
          count={-1}
        />
      </Container>
    </Layout>
  )
}

export default Page
