import React from 'react'
import { Box } from '@chakra-ui/react'
import BlogPostWithImage from '../components/blogCard'


const AllBlogs = () => {
  return (
    <Box display="grid" gridTemplateColumns={'repeat(3,1fr)'}>
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
      <BlogPostWithImage />
    </Box>
  )
}

export default AllBlogs