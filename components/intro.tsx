import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const BasicIntro: React.FC = () => {
  return (
    <div>
      <Box
        borderRadius="8px"
        bg={useColorModeValue('whiteAlpha.500', '#282c34')}
        mb={6}
        p={3}
        align="center"
        className="shadow-sm"
      >
        I&apos;m A software developer who brings latency down to his humour
        level 🚀
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1">
            Rose Kamal Love <span className="wave">👋</span>
          </Heading>
        </Box>
      </Box>
    </div>
  )
}
