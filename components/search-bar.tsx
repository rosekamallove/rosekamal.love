/* eslint-disable react-hooks/rules-of-hooks */
import { Search2Icon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Switch
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'

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
        <div>
          <Heading as="h3">Blogs</Heading>
          <div className="flex flex-row">
            <InputGroup mt={3} mb={5} style={{ zIndex: 0 }}>
              <InputLeftElement>
                <Search2Icon />
              </InputLeftElement>
              <Input
                placeholder="Search for posts"
                variant="filled"
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
              width={{ base: '13rem', md: '10rem' }}
            >
              <FormLabel htmlFor="email-alerts" mb={2}>
                <span className="text-sm md:text-base">Featured</span>
              </FormLabel>
              <Switch
                id="only tags"
                size="sm"
                checked={featured}
                colorScheme="teal"
                mb={2}
                onChange={() => {
                  setFeatured(!featured)
                }}
              />
            </FormControl>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
