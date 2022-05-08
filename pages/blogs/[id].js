import { ChatIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import Head from 'next/head'
import NextLink from 'next/link'
import { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Date from '../../components/date'
import Layout from '../../components/layouts/article'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
      id: params.id
    }
  }
}

const newTheme = {
  blockquote: props => {
    const { children } = props
    return (
      <Alert status="info" variant="left-accent">
        {children}
      </Alert>
    )
  },
  pre: props => {
    const { children } = props
    return <>{children}</>
  }
}

export default function Post({ postData, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const url = `https://rosekamallove.vercel.app/blogs/${id}`

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log({ name, email, message })

    let data = {
      name,
      email,
      id,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received')
      if (res.ok) {
        console.log('Response succeeded!')
        setName('')
        setEmail('')
        setMessage('')
      }
      onClose()
    })
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description}></meta>
        <meta property="og:url" content={url}></meta>
        <meta property="og:description" content={postData.og_description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postData.cover_image} />
      </Head>

      <Container maxW="container.lg">
        <Center>
          {postData.cover_image ? (
            <Image
              borderRadius="2px"
              width="100%"
              marginBottom="20px"
              src={postData.cover_image}
              alt="Cover Image"
            />
          ) : (
            ''
          )}
        </Center>
        <Heading variant="h2">{postData.title}</Heading>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          components={ChakraUIRenderer(newTheme)}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml
        >
          {postData.contentHtml}
        </ReactMarkdown>
        <Alert status="info" colorScheme="teal" variant="left-accent">
          <AlertIcon />
          “Feedback is a gift. Ideas are the currency of our next success. Let
          people see you value both feedback and ideas.”
        </Alert>
        <Box pt={2} pb={4}>
          <NextLink href="/blogs">
            <Button variant="ghost" colorScheme="teal" href="/blogs">
              <a>← Back to Blogs</a>
            </Button>
          </NextLink>
          <Button
            leftIcon={<ChatIcon />}
            onClick={onOpen}
            variant="ghost"
            colorScheme="teal"
          >
            Feedback
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent background={useColorModeValue('#c8cdd5', '#282c34')}>
            <ModalHeader>Send in your vital Feedback</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter your name"
                  id="name"
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  placeholder="Enter your email"
                  id="email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel htmlFor="text">Message</FormLabel>
                <Textarea
                  placeholder="Enter your message"
                  id="message"
                  type="textarea"
                  onChange={e => setMessage(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="teal"
                mr={3}
                leftIcon={<IoSend />}
                type="submit"
                onClick={e => handleSubmit(e)}
              >
                Send
              </Button>
              <Button onClick={onClose} leftIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  )
}
