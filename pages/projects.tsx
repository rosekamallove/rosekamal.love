import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Head from 'next/head'
import musicexpanse from '../public/images/music-expanse.jpg'
import youtemy from '../public/images/youtemy.png'
import { SVGBackground } from '.'

const Portfolio = () => {
  /*
   * TODO:
   *
   * => Refactor to make adding project/work-experience easier
   *    -> A JSON Object maybe containing meta details
   *    -> Markdown for description (mdx or inline)
   *    -> Static Images obv
   *    -> I don't really know how this can be implemented
   *       (probably ask Anshudhar probably)
   *
   * Projects:
   *  -> Portfolio (MLH + AlanAI)
   *  -> Resume Generator
   *  -> rosekamallove.github.io
   *  -> Gaggle (Maybe)
   *
   * Under Experiences:
   *  -> repo-report
   */
  return (
    <Layout>
      <Head>
        <title>Portfolio - Rose Kamal Love</title>
        <meta property="og:title" content={'Portfolio - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamal.love/images/rosek.jpg"
        />
        <meta
          property="og:description"
          content="My projects, work experiences and open source contributions"
        />
      </Head>
      <div className="relative overflow-hidden">
        <SVGBackground />
        <Container maxW="container.md">
          <Heading as="h3" mb={4}>
            My Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay="0">
              <WorkGridItem id="youtemy" title="YouTemy" thumbnail={youtemy}>
                A great way to learn from YouTube courses without any
                distractions and the ability to enroll in courses and track them
                with a daily streak to become more consistent.
              </WorkGridItem>
            </Section>
            <Section delay="0">
              <WorkGridItem
                id="music-expanse"
                title="Music Expanse"
                thumbnail={musicexpanse}
              >
                Tired of arguing over music at a party or a gathering? Here,
                make a virtual room add people with the unique RoomID, and let
                the members of the room control the music through a voting
                system.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </div>
    </Layout>
  )
}

export default Portfolio
