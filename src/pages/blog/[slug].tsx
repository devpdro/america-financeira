'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { blogArticle, icons } from '@/data/ui'
import { Error } from '@/presentation/pages'

import styles from '../../presentation/components/ui/blog/blog-post.module.scss'
import NewsLetter from '@/presentation/components/ui/newsletter/newsletter'

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

const BlogPost: React.FC = () => {
  const params = useParams()
  const slug = params ? params.slug : ''

  const post = blogArticle.find((post) => removeAccents(post.routes) === removeAccents(slug || ''))

  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: post?.title, url: `/blog/${slug}` },
  ]

  const generatePath = () => {
    return (
      <div>
        {sections.map((section, index) => (
          <span className={styles.span} key={index}>
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
    return <Error />
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_container}>
          <div className={styles.texts_box}>
            <div className={styles.routes}>{generatePath()}</div>
            <p className={styles.subtitle}>{post.subtitle}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles['icons-section']}>
              {icons.map(({ icon: Icon, link }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link para ${link}`}>
                  <Icon className={styles.icon} />
                </a>
              ))}{' '}
            </div>
            <p className={styles.date}>{post.date}</p>
          </div>
          <div className={styles.img_box}>
            <img className={styles.img} src={post.image.src} alt="Imagem do artigo" />
          </div>
        </div>
        <div className={styles.texts_container}>
          <div className={styles.content_section}>
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
              {post.titleListFive && (
                <li>
                  <span>{post.titleListFive}</span>
                  {post.listFive}
                </li>
              )}
              {post.titleListSix && (
                <li>
                  <span>{post.titleListSix}</span>
                  {post.listSix}
                </li>
              )}
              {post.titleListSeven && (
                <li>
                  <span>{post.titleListSeven}</span>
                  {post.listSeven}
                </li>
              )}
              {post.titleListEight && (
                <li>
                  <span>{post.titleListEight}</span>
                  {post.listEight}
                </li>
              )}
            </ol>
            <h1 className={styles.title_post}>{post.titleConclusion}</h1>
            <p className={styles.paragraph_post}>{post.paragraphThree}</p>
            {post.paragraphFour && <p className={styles.paragraph_post}>{post.paragraphFour}</p>}
          </div>
          <div className={styles.newsletter_section}>
            <NewsLetter />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
