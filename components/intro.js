import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

export const BasicIntro = () => {
  return (
    <div>
      <Box
        borderRadius="sm"
        bg={useColorModeValue('whiteAlpha.500', '#323843')}
        mb={6}
        p={3}
        align="center"
      >
        Hello There, I&apos;m a full-stack developer based in India
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rose Kamal Love
          </Heading>
          <p>{'{ Developer / Hobyist Photographer / Music Enthusiast }'}</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="120px"
            display="inline-block"
            borderRadius="full"
            src="/images/rosek.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
    </div>
  )
}
