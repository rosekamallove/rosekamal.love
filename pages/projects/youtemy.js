import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/projects'

const Project = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Title>
          YouTemy <Badge>2021-2022</Badge>
        </Title>
        <UnorderedList>
          <ListItem>
            This web app aims to improve learning efficiency and make a
            developer more streamlined and focused towards learning a new
            technology. It helps them keep track of the courses they are
            watching on YouTube
          </ListItem>
          <ListItem>
            We initially had thought of developing an extension for this,
            however, our pod leader suggested this could turn into a really good
            web application so we worked in that direction. Youtemy uses the
            <strong>YouTube Data API v3</strong> to present search results and
            present playlists on our web page. The tracking of progress of each
            playlists as well as adding bookmarks is done with the help of{' '}
            <strong>Firebase(Firestore)</strong>
          </ListItem>
          <ListItem>
            One of the drawbacks of watching educational playlists on YouTube is
            that we are eventually drawn into tutorial hells where we simply
            code along the YouTube creator and don’t wish to push our efforts in
            creating a new project. This hinders our progress. YouTemy aims to
            change that by essentially helping us track the number of playlists
            we have watched for a certain topic. It even keeps track of the
            <strong>percentage of course completed</strong>.
          </ListItem>

          <ListItem>
            In case, you want to enroll in a course not offered by us, simply
            search for it in the Explore section and add it to the Enrolled
            Courses and then, it helps us track the number of playlists that we
            are enrolled in, along with the percentage completion of the
            courses. YouTemy also allows us to bookmark videos and playlists for
            future use allowing us to come back to difficult topics when needed
          </ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://youtemy.tech">
              https://youtemy.tech/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <Badge>NodeJS</Badge>, <Badge>React</Badge>,{' '}
            <Badge>Firestore,</Badge> <Badge>YouTube Data API V3</Badge>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/rosekamallove/youtemy">
              https://github.com/rosekamallove/youtemy
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
