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
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  renderDescription: boolean
  searchField: string
  handleChange: (_val: string) => void
  featured: boolean
  setFeatured: Dispatch<SetStateAction<boolean>>
}

export const SearchBar: React.FC<Props> = ({
  renderDescription,
  searchField,
  handleChange,
  featured,
  setFeatured
}) => {
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
              placeholder="Search for posts"
              variant="filled"
              size="md"
              onChange={(e: { target: { value: string } }) =>
                handleChange(e.target.value)
              }
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
              Featured
            </FormLabel>
            <Switch
              id="only tags"
              size="sm"
              checked={featured}
              colorScheme="teal"
              onChange={() => {
                setFeatured(!featured)
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
