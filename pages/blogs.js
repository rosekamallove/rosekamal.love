import {
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
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
        <Heading as="h3">Blogs</Heading>
        <Box p={15}></Box>
        <List>
          {allPostsData.map(({ id, date, title, description }) => (
            <LinkBox key={id} as="article">
              <ListItem>
                <Box
                  borderRadius="lg"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bg={useColorModeValue('whiteAlpha.400', '#323843')}
                  mb={6}
                  p={3}
                >
                  <LinkOverlay href={`/blogs/${id}`}>
                    <Link>
                      <strong>{title}</strong>
                    </Link>
                  </LinkOverlay>
                  <Box>
                    <Date dateString={date} />
                  </Box>
                  {description ? <Text fontSize="sm">{description}</Text> : ''}
                </Box>
              </ListItem>
            </LinkBox>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export default Page
