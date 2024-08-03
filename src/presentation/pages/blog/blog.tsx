import { Footer, Navbar } from '@/presentation/components/common'
import BlogHeader from '@/presentation/components/common/blog/blog-header'
import BlogPost from '@/presentation/components/common/blog/blog-recent'


export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHeader />
 
      <BlogPost />
      <Footer />
    </>
  )
}
