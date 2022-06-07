/* eslint-disable react-hooks/rules-of-hooks */
import { List } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import postData from '../interfaces/postData'
import { RenderList } from './render-blog-list'
import { SearchBar } from './search-bar'

interface Props {
  allPostsData: Array<postData>
  renderDescription?: boolean
  featured?: boolean
  count?: number
}

export const RenderBlogs: React.FC<Props> = ({
  allPostsData,
  renderDescription,
  featured,
  count
}) => {
  count = count == -1 ? allPostsData.length : count
  const featuredPosts = allPostsData.filter(post => post.featured)

  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchField, setSearchField] = useState('')
  const [featuredPostsOnly, setFeatured] = useState(false)
  const [fromTag, setFromTag] = useState(false)

  const getFiltered = useRef<Function>(() => [])
  getFiltered.current = () => {
    if (featuredPostsOnly) return featuredPosts

    if (fromTag)
      return allPostsData.filter(post =>
        post.tags.includes(searchField.toLowerCase())
      )
    else
      return allPostsData.filter(
        post =>
          post.title.toLowerCase().includes(searchField.toLowerCase()) ||
          post.og_description
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          post.tags.includes(searchField.toLowerCase())
      )
  }

  useEffect(() => {
    setFilteredPosts(getFiltered.current())
  }, [searchField, featuredPostsOnly])

  const handleChange = (val: string): void => {
    setSearchField(val)
  }

  return (
    <List>
      <SearchBar
        renderDescription={renderDescription}
        handleChange={handleChange}
        searchField={searchField}
        featured={featuredPostsOnly}
        setFeatured={setFeatured}
      />
      {featured ? (
        <RenderList
          renderDescription={renderDescription}
          handleChange={handleChange}
          posts={featuredPosts}
          setFromTag={setFromTag}
          count={count}
        />
      ) : searchField === '' && featuredPostsOnly === false ? (
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
