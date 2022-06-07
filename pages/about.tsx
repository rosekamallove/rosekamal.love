import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { About } from '../components/about'
import { BasicIntro } from '../components/intro'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { TimeLine } from '../components/timeline'
import { getSortedPostsData } from '../lib/posts'

export default function Page({}) {
  return (
    <Layout>
      <Head>
        <title>About - Rose Kamal Love</title>
        <meta property="og:title" content={'About - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamallove.vercel.app/images/rosek.jpg"
        />
        <meta
          property="og:description"
          content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
        />
      </Head>
      <Container maxW="container.md">
        <Section delay="0.0">
          <BasicIntro />
          <About />
          <TimeLine />
        </Section>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
