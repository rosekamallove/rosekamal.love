import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import youtemy from '../public/images/youtemy.png'

const Work = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="youtemy"
            title="Inkdrop"
            thumbnail={youtemy}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Work
