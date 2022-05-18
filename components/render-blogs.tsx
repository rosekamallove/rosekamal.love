/* eslint-disable react-hooks/rules-of-hooks */
import { List } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import postData from '../interfaces/postData'
import { RenderList } from './render-blog-list'
import { SearchBar } from './search-bar'

interface Props {
  allPostsData: Array<postData>
  renderDescription?: boolean
  count?: number
}

export const RenderBlogs: React.FC<Props> = ({
  allPostsData,
  renderDescription,
  count
}) => {
  count = count == -1 ? allPostsData.length : count

  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchField, setSearchField] = useState('')
  const [onlyTags, setOnlyTags] = useState(false)
  const [fromTag, setFromTag] = useState(false)

  const getFiltered = useRef<Function>(() => [])
  getFiltered.current = () => {
    let filteredPosts = []
    if (onlyTags || fromTag) {
      //TODO: Search in tagArraySearch

      filteredPosts = allPostsData.filter(post =>
        // Searching in the tags only
        post.tags.includes(searchField.toLowerCase())
      )
    } else {
      filteredPosts = allPostsData.filter(
        // Searching in every searchField
        post =>
          post.title.toLowerCase().includes(searchField.toLowerCase()) ||
          post.og_description
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          post.tags.includes(searchField.toLowerCase())
      )
    }
    return filteredPosts
  }

  useEffect(() => {
    setFilteredPosts(getFiltered.current())
  }, [searchField])

  const handleChange = val => {
    if (val == ',') {
      //TODO: update the tagArraySearch state
    }
    setSearchField(val)
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
      {searchField === '' ? (
        <RenderList
          renderDescription={renderDescription}
          handleChange={handleChange}
          posts={allPostsData}
          setFromTag={setFromTag}
          count={count}
        />
      ) : (
        <RenderList
          renderDescription={renderDescription}
          handleChange={handleChange}
          posts={filteredPosts}
          setFromTag={setFromTag}
          count={count}
        />
      )}
    </List>
  )
}
