import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const BasicIntro: React.FC = () => {
  return (
    <div>
      <Box
        borderRadius="8px"
        bg={useColorModeValue('whiteAlpha.500', '#323843')}
        mb={6}
        p={3}
        align="center"
        className="shadow-sm"
      >
        I&apos;m A software developer who brings latency down to his humour
        level 🚀
      </Box>
      {/*<Box flexShrink={0} md={{ display: 'none' }} align="center">
        <div className="cursor-pointer rounded-full transition-ease-in-out duration-300 hover:scale-[1.1]">
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
        </div>
        </Box> */}
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rose Kamal Love <span className="wave">👋</span>
          </Heading>
          {/* <p>{'{ Developer / Hobyist Photographer / Music Enthusiast }'}</p> */}
        </Box>
      </Box>
    </div>
  )
}
