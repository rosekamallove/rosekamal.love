/* eslint-disable react/no-unescaped-entities */
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/projects'

const Project = () => (
  <Layout title="MusicExpanse">
    <Container maxW="container.lg">
      <Title>
        Music Expanse <Badge>2021-2021</Badge>
      </Title>
      <ul>
        <li>
          Tired of arguing over music at a party or a gathering? Here, make a
          virtual room add people with the unique RoomID, and let the members of
          the room control the music through a voting system.
        </li>
        <li>
          The Goal of this project is to provide a solution to the abomination
          playing music at parties is, where we keep shouting change the song,
          and other people say don't.
        </li>
        <li>
          MusicExpanse solves this problem by introducing music rooms which the
          admin creates with a fix no of votes to skip. Then the room code can
          be shared to the members at the party to allow them to vote on whether
          to skip the song or not.
        </li>
        <li>
          It uses the Spotify's Rest API and OAuth authentication method to
          provide the song playing details and to send request to skip / pause
          the songs
        </li>
      </ul>
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
          <Badge>Django</Badge>, <Badge>React</Badge>,{' '}
          <Badge>Spotify OAuth</Badge>
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
