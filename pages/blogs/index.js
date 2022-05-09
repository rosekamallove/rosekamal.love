import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { RenderBlogs } from '../../components/render-blog-list'
import { getSortedPostsData } from '../../lib/posts'

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
      <Container maxW="container.md">
        <Heading as="h3">Blogs</Heading>
        <Box p={15}></Box>
        <RenderBlogs
          allPostsData={allPostsData}
          renderDescription={true}
          count={-1}
        />
      </Container>
    </Layout>
  )
}

export default Page
