/* eslint-disable react-hooks/rules-of-hooks */
import { Search2Icon } from '@chakra-ui/icons'
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Switch
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const SearchBar = ({
  renderDescription,
  searchField,
  handleChange,
  onlyTags,
  setOnlyTags
}) => {
  const [tag, setTag] = useState(onlyTags)

  useEffect(() => {
    setTag(onlyTags)
  }, [onlyTags])

  return (
    <>
      {renderDescription ? (
        <Flex>
          <Heading as="h2">Blogs</Heading>
          <Spacer />
          <InputGroup ml={[5, 10, 20]} mt={3} style={{ zIndex: 0 }}>
            <InputLeftElement>
              <Search2Icon />
            </InputLeftElement>
            <Input
              placeholder={onlyTags ? 'Enter tag' : 'Search for posts'}
              variant="filled"
              size="md"
              onChange={e => handleChange(e.target.value)}
              value={searchField}
            />
          </InputGroup>
          <FormControl
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml={5}
            width={{ base: '13rem', md: '10rem' }}
          >
            <FormLabel htmlFor="email-alerts" mb="0" fontSize="80%">
              By Tags
            </FormLabel>
            <Switch
              id="only tags"
              size="sm"
              checked={tag}
              colorScheme="teal"
              onChange={() => {
                setTag(!tag)
                setOnlyTags(!tag)
              }}
            />
          </FormControl>
        </Flex>
      ) : (
        ''
      )}
    </>
  )
}
