import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/projects'

const Project = () => (
  <Layout title="MusicExpanse">
    <Container maxW="container.lg">
      <Title>
        Music Expanse <Badge>2021-2021</Badge>
      </Title>
      <P>
        Tired of arguing over music at a party or a gathering? Here, make a
        virtual room add people with the unique RoomID, and let the members of
        the room control the music through a voting system.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://music-expanse.herokuapp.com">
            https://music-expanse.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django, React, Spotify OAuth</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/rosekamallove/music-expanse">
            https://github.com/rosekamallove/music-expanse
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project
