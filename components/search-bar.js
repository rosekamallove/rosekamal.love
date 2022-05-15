/* eslint-disable react-hooks/rules-of-hooks */
import { Search2Icon } from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

export const SearchBar = ({ renderDescription, searchField, handleChange }) => {
  return (
    <>
      {renderDescription ? (
        <Flex>
          <Heading as="h2">Blogs</Heading>
          <InputGroup ml={[5, 10, 20]} mt={3}>
            <InputLeftElement>
              <Search2Icon />
            </InputLeftElement>
            <Input
              placeholder="Search"
              size="md"
              onChange={e => handleChange(e)}
              value={searchField}
            />
          </InputGroup>
        </Flex>
      ) : (
        ''
      )}
    </>
  )
}
