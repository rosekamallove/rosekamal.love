/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Tag, TagLabel } from '@chakra-ui/react'

export const RenderTags = ({ tagArray }) => {
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
          <TagLabel fontFamily="Jetbrains Mono" fontSize="13px">
            <strong fontFamily="Poppins"># </strong>
            {tag}
          </TagLabel>
        </Tag>
      ))}
    </Box>
  )
}
