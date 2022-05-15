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

export const SearchBar = ({
  renderDescription,
  searchField,
  handleChange,
  onlyTags,
  setOnlyTags
}) => {
  return (
    <>
      {renderDescription ? (
        <Flex>
          <Heading as="h2">Blogs</Heading>
          <Spacer />
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
          <FormControl
            display="flex"
            justifyContent="center"
            alignItems="center"
            ml={5}
            width={{ base: '13rem', md: '12rem' }}
          >
            <FormLabel htmlFor="email-alerts" mb="0">
              By Tags
            </FormLabel>
            <Switch
              id="only tags"
              size="md"
              checked={onlyTags}
              onChange={() => setOnlyTags(!onlyTags)}
            />
          </FormControl>
        </Flex>
      ) : (
        ''
      )}
    </>
  )
}
