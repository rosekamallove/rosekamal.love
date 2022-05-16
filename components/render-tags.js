/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Tag, TagLabel } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

export const RenderTags = ({
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
            fontSize="13px"
            onClick={() => {
              setOnlyTags(true)
              handleChange(tag)
              if (!renderDescription) router.push('/blogs')
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
