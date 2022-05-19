import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import Date from './date'
import { MinutesRead } from './minutes-read'
import { RenderTags } from './render-tags'

interface Props {
  id: string
  date: string
  title: string
  description: string
  og_description: string
  words: number
  tagArray: Array<string>
  renderDescription: boolean
  handleChange: (_val: string) => void
  setOnlyTags: Dispatch<SetStateAction<boolean>>
}

export const BlogListItem: React.FC<Props> = ({
  id,
  date,
  title,
  description,
  og_description,
  words,
  tagArray,
  renderDescription,
  handleChange,
  setOnlyTags
}) => {
  return (
    <>
      <ListItem>
        <Box
          borderRadius="8px"
          _hover={{
            background: `${useColorModeValue('whiteAlpha.400', '#323843')}`
          }}
          transition="ease-in-out 0.25s"
          className="hover:shadow-md"
          mb={1}
          p={2}
        >
          <NextLink
            href={`/blogs/${id}`}
            color={useColorModeValue('#3181CE', '#c678dd')}
          >
            <Link>
              <Heading as="h2" size="md">
                {title}
              </Heading>
            </Link>
          </NextLink>
          <Box>
            <Date dateString={date} />
            {' • '}
            <MinutesRead words={words} />
          </Box>
          <RenderTags
            tagArray={tagArray}
            handleChange={handleChange}
            setOnlyTags={setOnlyTags}
            renderDescription={renderDescription}
          />
          {renderDescription ? (
            <Text fontSize="md">{description}</Text>
          ) : (
            <Text fontSize="md">{og_description}</Text>
          )}
        </Box>
      </ListItem>
    </>
  )
}
