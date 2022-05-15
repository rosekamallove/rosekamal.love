/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Tag, TagLabel } from '@chakra-ui/react'

export const RenderTags = ({
  tagArray,
  setSearchField,
  renderDescription,
  setOnlyTags,
  onlyTags
}) => {
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
              if (renderDescription) {
                setOnlyTags(!onlyTags)
                setSearchField(tag)
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
