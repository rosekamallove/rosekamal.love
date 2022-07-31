import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layouts/article'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Resume - Rose Kamal Love</title>
        <meta property="og:title" content={'Resume - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamallove.vercel.app/images/rosek.jpg"
        />
      </Head>
      <Container maxW="container.md" h="100vh">
        <iframe
          src="https://drive.google.com/file/d/16S4zJlCyRrM5e8k66Ng69h0f1Q1aRL04/preview"
          allow="autoplay"
        ></iframe>
      </Container>
    </Layout>
  )
}
