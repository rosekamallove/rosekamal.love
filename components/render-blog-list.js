/* eslint-disable react-hooks/rules-of-hooks */
import { Heading, List } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { BlogListItem } from './blog-list-item'
import { SearchBar } from './search-bar'

export const RenderBlogs = ({ allPostsData, renderDescription, count }) => {
  count = count == -1 ? allPostsData.length : count
  const [postData, setPostData] = useState(allPostsData)
  const [searchField, setSearchField] = useState('')
  const [onlyTags, setOnlyTags] = useState(false)

  const handleChange = useRef()

  useEffect(() => {
    handleChange.current(searchField)
  }, [searchField])

  handleChange.current = val => {
    setSearchField(val)
    if (val === '') return setPostData(allPostsData)

    let filteredPosts
    if (onlyTags) {
      filteredPosts = postData.filter(post => post.tags.includes(searchField))
      setOnlyTags(!onlyTags)
    } else {
      filteredPosts = postData.filter(
        post =>
          post.title.toLowerCase().includes(searchField.toLowerCase()) ||
          post.og_description.toLowerCase().includes(searchField.toLowerCase())
      )
    }

    setPostData(filteredPosts)
  }

  return (
    <List>
      <SearchBar
        renderDescription={renderDescription}
        handleChange={handleChange}
        searchField={searchField}
        onlyTags={onlyTags}
        setOnlyTags={setOnlyTags}
      />
      {postData.length === 0 ? (
        <Heading textAlign="center" opacity="0.4" fontWeight="300">
          No Posts Found
        </Heading>
      ) : (
        postData.map(
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
                    setSearchField={setSearchField}
                    onlyTags={onlyTags}
                    setOnlyTags={setOnlyTags}
                  />
                </NextLink>
              )
            }
          }
        )
      )}
    </List>
  )
}
