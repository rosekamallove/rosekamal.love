import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/projects'

const Project = () => (
  <Layout title="YouTemy">
    <Container maxW="container.lg">
      <Title>
        YouTemy <Badge>2021-</Badge>
      </Title>
      <P>
        A great way to learn from YouTube courses without any distractions and
        the ability to enroll in courses and track them with a daily streak to
        become more consistent.
      </P>
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
          <span>NodeJS, Reac, Firestore , YouTube Data API V3</span>
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

export default Project
