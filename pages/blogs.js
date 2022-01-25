import { Box, Center, Container, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import Date from '../components/date'
import Layout from '../components/layouts/article'
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
      <Container maxW="container.lg">
        <Heading as="h1">
          <Center>{'{ Still Working on it... }'}</Center>
        </Heading>
        {/* <Heading as="h2" variant="page-title">
          Blogs
        </Heading> */}
        {/* Blogs Section */}
        <Box p={15}></Box>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <NextLink href={`/blogs/${id}`}>
                <a>{title}</a>
              </NextLink>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default Page
