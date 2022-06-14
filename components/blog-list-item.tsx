import {
  Box,
  Heading,
  Link,
  ListItem,
  Tag,
  Text,
  TagLabel,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import Date from './date'
import { MinutesRead } from './minutes-read'
import { RenderTags } from './render-tags'

interface Props {
  id: string
  date: string
  title: string
  description: string
  og_description: string
  words: number
  published: boolean
  devUrl?: string
  tagArray: Array<string>
  renderDescription: boolean
  handleChange: (_val: string) => void
  setOnlyTags: Dispatch<SetStateAction<boolean>>
}

export const BlogListItem: React.FC<Props> = ({
  id,
  date,
  title,
  description,
  published,
  og_description,
  words,
  tagArray,
  renderDescription,
  handleChange,
  setOnlyTags
}) => {
  return (
    <>
      <ListItem>
        <Box
          borderRadius="8px"
          _hover={{
            background: `${useColorModeValue('whiteAlpha.400', '#282c34')}`
          }}
          transition="ease-in-out 0.25s"
          className="md:grid md:grid-cols-4 hover:shadow-md"
          mb={1}
          p={2}
        >
          <div className="invisible md:my-5 h-0 text-base md:visible md:h-auto">
            <Date dateString={date} />
            <div className=""></div>
            <MinutesRead words={words} />
          </div>
          <div className="col-span-3 ml-2">
            <NextLink
              href={`/blogs/${id}`}
              color={useColorModeValue('#3181CE', '#c678dd')}
              scroll={true}
            >
              <Box display="inline relative">
                <Link>
                  <Heading as="h3" display="inline" mr={1}>
                    {title}
                  </Heading>
                  {published ? (
                    ''
                  ) : (
                    <Tag
                      className="top-0 left-0"
                      mt="2"
                      size="sm"
                      borderRadius="sm"
                      variant="outline"
                      colorScheme="red"
                    >
                      <TagLabel cursor="pointer" fontFamily="Jetbrains Mono">
                        Draft
                      </TagLabel>
                    </Tag>
                  )}
                </Link>
              </Box>
            </NextLink>
            <div className="visible md:invisible md:h-0">
              <Date dateString={date} />
              {' • '}
              <MinutesRead words={words} />
            </div>
            <RenderTags
              tagArray={tagArray}
              handleChange={handleChange}
              setOnlyTags={setOnlyTags}
              renderDescription={renderDescription}
            />
            {renderDescription ? (
              <Text fontSize="md">{description}</Text>
            ) : (
              <Text fontSize="md">{og_description}</Text>
            )}
          </div>
        </Box>
      </ListItem>
    </>
  )
}
