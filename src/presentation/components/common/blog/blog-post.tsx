'use client'

import Link from 'next/link'
import { StaticImageData } from 'next/image'
import { useParams } from 'next/navigation'

import { blogArticle } from '@/data/ui'

import styles from './blog-post.module.scss'

// Função para remover acentos e caracteres especiais de uma string
const removeAccents = (str: any) => {
  if (typeof str !== 'string' || str === '') {
    return ''
  }

  return str
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èééë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

type BlogPostItem = {
  routes: string
  title: string
  subtitle: string
  date: string
  image: StaticImageData
  paragraphOne: string
  titleContentOne: string
  paragraphTwo: string
  titleContentTwo: string
  titleListOne?: string
  listOne?: string
  titleListTwo?: string
  listTwo?: string
  titleListThree?: string
  listThree?: string
  titleListFour?: string
  listFour?: string
  titleListFive?: string
  listFive?: string
  titleSecond?: string
  titleListSix?: string
  listSix?: string
  titleListSeven?: string
  listSeven?: string
  titleListEight?: string
  listEight?: string
  titleConclusion: string
  paragraphThree: string
  paragraphFour: string
}

const BlogPost: React.FC = () => {
  const { slug } = useParams() as { slug?: string }

  const post = blogArticle.find((post) => removeAccents(post.routes) === removeAccents(slug || ''))

  const pageTitle = post ? post.title : 'Blog Matte: Novidades, Dicas e Tendências em Diversas Áreas'

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: post?.title, url: `/blog/${slug}` },
  ]

  const generatePath = () => {
    return (
      <div>
        {sections.map((section, index) => (
          <span key={index}>
            {index > 0 && ' > '}
            <Link className={`${styles.link} `} href={section.url}>
              <span>{section.title}</span>
            </Link>
          </span>
        ))}
      </div>
    )
  }

  if (!post) {
    return <div>Post não encontrado</div>
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.routes}>{generatePath()}</div>
        <div className={styles.content_container}>
          <div className={styles.texts_box}>
            <p className={styles.subtitle}>{post.subtitle}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
          </div>
          <div className={styles.img_box}>
            <img className={styles.img} src={post.image.src} alt="Imagem do artigo" />
          </div>
        </div>
        <div className={styles.texts_container}>
          <p className={styles.paragraph_post}>{post.paragraphOne}</p>
          <h1 className={styles.title_post}>{post.titleContentOne}</h1>
          <p className={styles.paragraph_post}>{post.paragraphTwo}</p>
          <h1 className={styles.title_post}>{post.titleContentTwo}</h1>
          <ol className={styles.list_box}>
            {post.titleListOne && (
              <li>
                <span>{post.titleListOne}</span>
                {post.listOne}
              </li>
            )}
            {post.titleListTwo && (
              <li>
                <span>{post.titleListTwo}</span>
                {post.listTwo}
              </li>
            )}
            {post.titleListThree && (
              <li>
                <span>{post.titleListThree}</span>
                {post.listThree}
              </li>
            )}
            {post.titleListFour && (
              <li>
                <span>{post.titleListFour}</span>
                {post.listFour}
              </li>
            )}
          </ol>
          <h1 className={styles.title_post}>{post.titleConclusion}</h1>
          <p className={styles.paragraph_post}>{post.paragraphThree}</p>
        </div>
      </div>
    </>
  )
}

export default BlogPost
