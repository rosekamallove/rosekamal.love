/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Tag,
  TagLabel,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Date from './date'

export const RenderBlogs = ({ allPostsData, renderDescription, count }) => {
  count = count == -1 ? allPostsData.length : count
  return (
    <List>
      {allPostsData.map(
        (
          {
            id,
            date,
            title,
            description,
            og_description,
            words,
            tags,
            published
          },
          index
        ) => {
          const tagArray = tags.split(',').map(tag => tag.trim())
          if (!published) return ''
          if (index < count) {
            return (
              <NextLink key={id} href={`/blogs/${id}`}>
                <LinkBox as="article">
                  <ListItem>
                    <Box
                      borderRadius="sm"
                      bg={useColorModeValue('whiteAlpha.400', '#323843')}
                      mb={6}
                      p={3}
                    >
                      <LinkOverlay
                        href={`/blogs/${id}`}
                        color={useColorModeValue('#3181CE', '#c678dd')}
                      >
                        <Heading size="md" as="h4">
                          {title}
                        </Heading>
                      </LinkOverlay>
                      <Box>
                        <Date dateString={date} />
                        {' • '}
                        <strong>
                          ☕ {Math.ceil(words / 225)}{' '}
                          {Math.ceil(words / 255) == 1 ? 'minute' : 'minutes'}{' '}
                          read
                        </strong>
                      </Box>
                      <Box mb={0}>
                        {tagArray.map(tag => (
                          <Tag
                            pt={0}
                            mr={1}
                            mt={1}
                            borderRadius="sm"
                            key={tag}
                            variant="subtle"
                            colorScheme="teal"
                          >
                            <TagLabel
                              fontFamily="Jetbrains Mono"
                              fontSize="13px"
                            >
                              <strong fontFamily="Poppins"># </strong>
                              {tag}
                            </TagLabel>
                          </Tag>
                        ))}
                      </Box>
                      {renderDescription ? (
                        <Text fontSize="md">{description}</Text>
                      ) : (
                        <Text fontSize="md">{og_description}</Text>
                      )}
                    </Box>
                  </ListItem>
                </LinkBox>
              </NextLink>
            )
          }
        }
      )}
    </List>
  )
}
