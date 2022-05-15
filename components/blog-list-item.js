import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Date from './date'
import { MinutesRead } from './minutes-read'
import { RenderTags } from './render-tags'

export const BlogListItem = ({
  id,
  date,
  title,
  description,
  og_description,
  words,
  tagArray,
  renderDescription,
  setSearchField,
  onlyTags,
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
            setSearchField={setSearchField}
            setOnlyTags={setOnlyTags}
            onlyTags={onlyTags}
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
