import {
  Box,
  Heading,
  Image,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import React from 'react'

export const BasicIntro: React.FC = () => {
  const toast = useToast()
  const id = 'toast-id'
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
          <div
            className="cursor-pointer rounded-full transition-ease-in-out duration-300 hover:scale-[1.1]"
            onClick={() => {
              if (!toast.isActive(id))
                toast({
                  description: 'You teasing me? You naughty naughty 🤣',
                  id,
                  position: 'top-right',
                  isClosable: true
                })
            }}
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
          </div>
        </Box>
      </Box>
    </div>
  )
}
