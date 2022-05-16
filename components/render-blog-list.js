import NextLink from 'next/link'
import { BlogListItem } from './blog-list-item'

export const RenderList = ({
  posts,
  setFromTag,
  count,
  renderDescription,
  handleChange
}) =>
  posts.map(
    (
      { id, date, title, description, og_description, words, tags, published },
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
              handleChange={handleChange}
              setOnlyTags={setFromTag}
            />
          </NextLink>
        )
      }
    }
  )
