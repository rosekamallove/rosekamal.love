import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
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
          {allPostsData.map(({ id, date, title, description }) => (
            <ListItem key={id}>
              <Box
                borderRadius="lg"
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                mb={6}
                p={3}
              >
                <NextLink href={`/blogs/${id}`}>
                  <Link>
                    <strong>{title}</strong>
                  </Link>
                </NextLink>
                <br />
                <pre>
                  <Date dateString={date} />
                </pre>
                {description ? <Text fontSize="sm">{description}</Text> : ''}
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export default Page
