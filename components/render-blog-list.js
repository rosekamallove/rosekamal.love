import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Date from './date'

export const RenderBlogs = ({ allPostsData, rendeDescription, count }) => {
  count = count == -1 ? allPostsData.length : count
  return (
    <List>
      {allPostsData.map(
        ({ id, date, title, description, words, og_description }, index) => {
          if (index < count) {
            return (
              <LinkBox key={id} as="article">
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
                      <ChevronRightIcon />
                      <strong>{title}</strong>
                    </LinkOverlay>
                    <Box ml="22px">
                      <Box fontSize="sm">
                        <Date dateString={date} />{' '}
                        <strong>
                          ☕ {Math.ceil(words / 225)}{' '}
                          {Math.ceil(words / 255) == 1 ? 'minute' : 'minutes'}{' '}
                          read
                        </strong>
                      </Box>
                      {rendeDescription ? (
                        <Text fontSize="md">{description}</Text>
                      ) : (
                        <Text fontSize="md">{og_description}</Text>
                      )}
                    </Box>
                  </Box>
                </ListItem>
              </LinkBox>
            )
          }
        }
      )}
    </List>
  )
}
