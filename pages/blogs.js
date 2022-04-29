import { ArrowRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
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
          <Center>Blogs</Center>
        </Heading>
        {/* <Heading as="h2" variant="page-title">
          Blogs
        </Heading> */}
        {/* Blogs Section */}
        <Box p={15}></Box>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <ListIcon as={ArrowRightIcon} />
              <NextLink href={`/blogs/${id}`}>
                <a>{title}</a>
              </NextLink>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export default Page
