import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello There, I&apos;m a full-stack developer based in India
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rose Kamal Love
          </Heading>
          <p>{'{ Developer / Hobyist Photographer / Music Enthusiast }'}</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
