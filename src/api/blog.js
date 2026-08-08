import { BLOGS } from '../data/blogs.jsx'

export const getPublishedPosts = () => {
  return Promise.resolve(BLOGS)
}

export const getPostBySlug = (slug) => {
  const post = BLOGS.find((post) => post.slug === slug)

  if (!post) {
    return Promise.reject(new Error('Post not found'))
  }

  return Promise.resolve(post)
}