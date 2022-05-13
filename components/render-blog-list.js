/* eslint-disable react-hooks/rules-of-hooks */
import { List } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BlogListItem } from './blog-list-item'

export const RenderBlogs = ({ allPostsData, renderDescription, count }) => {
  count = count == -1 ? allPostsData.length : count
  return (
    <List>
      {allPostsData.map(
        (
          {
            id,
            date,
            title,
            description,
            og_description,
            words,
            tags,
            published
          },
          index
        ) => {
          const tagArray = tags.split(',').map(tag => tag.trim())
          if (!published) return ''
          if (index < count) {
            return (
              <NextLink key={id} href={`/blogs/${id}`}>
                <BlogListItem
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                  renderDescription={renderDescription}
                  og_description={og_description}
                  words={words}
                  tagArray={tagArray}
                />
              </NextLink>
            )
          }
        }
      )}
    </List>
  )
}
