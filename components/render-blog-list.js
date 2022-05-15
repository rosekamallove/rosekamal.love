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
  const [fromTag, setFromTag] = useState(false)

  const getFiltered = useRef()
  getFiltered.current = () => {
    let filteredPosts
    if (onlyTags || fromTag) {
      filteredPosts = postData.filter(post =>
        post.tags.includes(searchField.toLowerCase())
      )
    } else {
      filteredPosts = postData.filter(
        post =>
          post.title.toLowerCase().includes(searchField.toLowerCase()) ||
          post.og_description.toLowerCase().includes(searchField.toLowerCase())
      )
    }
    return filteredPosts
  }
  useEffect(() => {
    const filteredPosts = getFiltered.current()
    setPostData(filteredPosts)
  }, [searchField])

  const handleChange = val => {
    setSearchField(val)
    if (val === '') {
      return setPostData(allPostsData)
    }
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
                    handleChange={handleChange}
                    setOnlyTags={setFromTag}
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
