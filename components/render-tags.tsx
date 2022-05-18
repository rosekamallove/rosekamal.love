/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Tag, TagLabel } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  tagArray: Array<string>
  handleChange?: (_val: string) => void
  renderDescription?: boolean
  setOnlyTags?: Dispatch<SetStateAction<boolean>>
}

export const RenderTags: React.FC<Props> = ({
  tagArray,
  handleChange,
  renderDescription,
  setOnlyTags
}) => {
  const router = useRouter()
  return (
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
            cursor="pointer"
            fontFamily="Jetbrains Mono"
            onClick={() => {
              if (setOnlyTags && handleChange) {
                setOnlyTags(true)
                handleChange(tag)
                if (!renderDescription) router.push('/blogs')
              }
            }}
          >
            <strong># </strong>
            {tag}
          </TagLabel>
        </Tag>
      ))}
    </Box>
  )
}
