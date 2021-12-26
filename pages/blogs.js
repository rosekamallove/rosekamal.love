import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading as="h2" variant="page-title">
          Blogs
        </Heading>
      </Container>
    </Layout>
  )
}

export default Page
