'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { blogArticle } from '@/data/ui'
import { RemoveAccents } from '@/utils'

import page from './blog-recent.module.scss'
import post from './blog-post.module.scss'
import SearchBlog from './search-blog'

const useFilteredPosts = (searchQuery: string) => {
  const normalizedQuery = RemoveAccents(searchQuery)
  return blogArticle.filter(
    (post) =>
      RemoveAccents(post.title).includes(normalizedQuery) || RemoveAccents(post.subtitle).includes(normalizedQuery)
  )
}
interface Post {
  id: number
  title: string
  subtitle: string
  date: string
  image: StaticImageData
}
const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const themes = [...new Set(blogArticle.map((post) => post.subtitle))]
  const [visiblePosts, setVisiblePosts] = useState<number>(7)
  const filteredPosts = useFilteredPosts(searchQuery)

  const handleSearch = (query: string) => setSearchQuery(query)
  const loadMorePosts = () => setVisiblePosts((prev) => prev + 6)

  return (
    <section className={`${page.container} panel`} data-color="white">
      <SearchBlog className={page.navbar_blog} themes={themes} onSearch={handleSearch} />
      <div className={`${page.results_container}`}>
        <h1 className={page.title}>{searchQuery ? 'Resultados' : 'Mais recentes'}</h1>
        <PostsList posts={filteredPosts.slice(0, visiblePosts)} />
        {filteredPosts.length > visiblePosts && (
          <button className={page.btn_load} onClick={loadMorePosts}>
            Ler mais artigos
          </button>
        )}
      </div>
    </section>
  )
}

const PostsList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className={page.posts_container}>
    {posts.map((post) => (
      <BlogPost key={post.id} {...post} />
    ))}
  </div>
)

const BlogPost: React.FC<Post> = ({ id, title, subtitle, date, image }) => (
  <div className={`${post.container} panel`} data-color="white">
    <Link href={`/blog/${RemoveAccents(title)}`}>
      <div className={post.article}>
        <Image loading="lazy" src={image} alt="Imagem do post" />
        <p className={post.subtitle}>{subtitle}</p>
        <h1 className={post.title}>
          <span>{title}</span>
        </h1>
        <p className={post.data}>{date}</p>
      </div>
    </Link>
  </div>
)

export default BlogPage
