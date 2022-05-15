/* eslint-disable react-hooks/rules-of-hooks */
import { List, useToast } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import { BlogListItem } from './blog-list-item'
import { SearchBar } from './search-bar'

export const RenderBlogs = ({ allPostsData, renderDescription, count }) => {
  const toast = useToast()
  const id = 'test-toast'

  count = count == -1 ? allPostsData.length : count
  const [postData, setPostData] = useState(allPostsData)
  const [searchField, setSearchField] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setSearchField(e.target.value)
    if (e.target.value === '') return setPostData(allPostsData)

    const filteredPosts = postData.filter(
      post =>
        post.title.toLowerCase().includes(searchField.toLowerCase()) ||
        post.og_description.toLowerCase().includes(searchField.toLowerCase())
    )
    setPostData(filteredPosts)

    if (filteredPosts.length === 0 && !toast.isActive(id))
      toast({
        description: 'No posts found',
        status: 'error',
        position: 'top-right',
        isClosable: true,
        id
      })
  }

  return (
    <List>
      <SearchBar
        renderDescription={renderDescription}
        handleChange={handleChange}
        searchField={searchField}
      />
      {postData.map(
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
