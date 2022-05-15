import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { RenderBlogs } from '../../components/render-blog-list'
import Section from '../../components/section'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Blogs = ({ allPostsData }) => {
  return (
    <Layout title="Blogs">
      <Section delay={0.1}>
        <Container maxW="container.lg">
          <RenderBlogs
            allPostsData={allPostsData}
            renderDescription={true}
            count={-1}
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default Blogs
