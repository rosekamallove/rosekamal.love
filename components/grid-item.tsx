import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

interface Props {
  children?: React.ReactNode
  href?: string
  id?: string
  title?: string
  thumbnail?: any
}

export const GridItem: React.FC<Props> = ({
  children,
  href,
  title,
  thumbnail
}) => (
  <Box w="80%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem: React.FC<Props> = ({
  children,
  id,
  title,
  thumbnail
}) => (
  <Box
    w="100%"
    h="100%"
    borderRadius="8px"
    textAlign="center"
    _hover={{
      background: `${useColorModeValue('whiteAlpha.400', '#282c34')}`
    }}
    transition="ease-in-out 0.25s"
    className="p-3 hover:shadow-md"
  >
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 8px;
      }
    `}
  />
)
