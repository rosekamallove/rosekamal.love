import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import musicexpanse from '../public/images/music-expanse.jpg'
import youtemy from '../public/images/youtemy.png'

const Work = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading as="h3" mb={4}>
          My Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="youtemy" title="YouTemy" thumbnail={youtemy}>
              A great way to learn from YouTube courses without any distractions
              and the ability to enroll in courses and track them with a daily
              streak to become more consistent.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="music-expanse"
              title="Music Expanse"
              thumbnail={musicexpanse}
            >
              Tired of arguing over music at a party or a gathering? Here, make
              a virtual room add people with the unique RoomID, and let the
              members of the room control the music through a voting system.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
