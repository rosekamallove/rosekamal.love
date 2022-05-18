import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <Box>
    <NextLink href="/projects">
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" mb={4}>
      {children}
    </Heading>
  </Box>
)

interface WorkImageProps {
  src: any
  alt: string
}

export const WorkImage: React.FC<WorkImageProps> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta: React.FC<TitleProps> = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
