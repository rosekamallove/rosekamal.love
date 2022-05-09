import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
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
        ({ id, date, title, description, og_description, words }, index) => {
          if (index < count) {
            return (
              <NextLink key={id} href={`/blogs/${id}`}>
                <LinkBox as="article">
                  <ListItem>
                    <Box
                      borderRadius="sm"
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      bg={useColorModeValue('whiteAlpha.400', '#323843')}
                      mb={6}
                      p={3}
                    >
                      <LinkOverlay
                        href={`/blogs/${id}`}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('#3181CE', '#c678dd')}
                      >
                        <strong>{title}</strong>
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
