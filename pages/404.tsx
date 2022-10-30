import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6}>
        <NextLink href="/home">
          <Button colorScheme="teal" leftIcon={<ArrowBackIcon />}>
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
