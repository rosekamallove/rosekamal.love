import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../components/layouts/article'
import { RenderBlogs } from '../../components/render-blogs'
import Section from '../../components/section'
import { getSortedPostsData } from '../../lib/posts'
import { generateRssFeed } from '../../lib/rss'
import BlogImage from '../../public/images/og_blogs.png'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  await generateRssFeed()

  return {
    props: {
      allPostsData
    }
  }
}

const Blogs = ({ allPostsData }) => {
  return (
    <Layout title="Blogs">
      <Head>
        <meta property="og:title" content="Blogs - Rose Kamal Love"></meta>
        <meta
          property="og:description"
          content="Blog posts about Internships, Web Development, Open Source, Productivity and more"
        ></meta>
        <meta
          property="og:image"
          content="https://rosekamallove.vercel.app/images/og_blogs.png"
        ></meta>
      </Head>
      <Section delay="0.1">
        <Container maxW="container.md">
          <RenderBlogs
            allPostsData={allPostsData}
            renderDescription={true}
            count={-1}
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default Blogs
