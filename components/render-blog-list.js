import {
  Box,
  Link,
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
      {allPostsData.map(({ id, date, title, description }, index) => {
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
                  <LinkOverlay href={`/blogs/${id}`}>
                    <Link>
                      <strong>{title}</strong>
                    </Link>
                  </LinkOverlay>
                  <Box>
                    <Date dateString={date} />
                  </Box>
                  {rendeDescription ? (
                    <Text fontSize="sm">{description}</Text>
                  ) : (
                    ''
                  )}
                </Box>
              </ListItem>
            </LinkBox>
          )
        }
      })}
    </List>
  )
}
