import NextLink from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import postData from '../interfaces/postData'
import { BlogListItem } from './blog-list-item'

interface Props {
  posts: Array<postData>
  setFromTag: Dispatch<SetStateAction<boolean>>
  count?: number
  renderDescription?: boolean
  handleChange: (_val: string) => void
}

export const RenderList: React.FC<Props> = ({
  posts,
  setFromTag,
  renderDescription,
  handleChange
}) => (
  <>
    {posts.map(
      ({
        id,
        date,
        title,
        description,
        og_description,
        words,
        tags,
        published,
        devUrl
      }) => {
        const tagArray = tags.split(',').map(tag => tag.trim())
        return (
          <NextLink key={id} href={`/blogs/${id}`}>
            <BlogListItem
              id={id}
              date={date}
              published={published}
              title={title}
              devUrl={devUrl}
              description={description}
              renderDescription={renderDescription}
              og_description={og_description}
              words={words}
              tagArray={tagArray}
              handleChange={handleChange}
              setOnlyTags={setFromTag}
            />
          </NextLink>
        )
      }
    )}
  </>
)
