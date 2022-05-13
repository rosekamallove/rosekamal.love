import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
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
  renderDescription
}) => {
  return (
    <LinkBox as="article">
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
          <LinkOverlay
            href={`/blogs/${id}`}
            color={useColorModeValue('#3181CE', '#c678dd')}
          >
            <Heading as="h2" size="md">
              {title}
            </Heading>
          </LinkOverlay>
          <Box>
            <Date dateString={date} />
            {' • '}
            <MinutesRead words={words} />
          </Box>
          <RenderTags tagArray={tagArray} />
          {renderDescription ? (
            <Text fontSize="md">{description}</Text>
          ) : (
            <Text fontSize="md">{og_description}</Text>
          )}
        </Box>
      </ListItem>
    </LinkBox>
  )
}
