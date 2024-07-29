import {
  BlogHighlights,
  Faq,
  Footer,
  Header,
  Navbar,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";
import BlogMostReads from "@/presentation/components/common/blog/blog-most-reads";
import BlogLatestPosts from "@/presentation/components/common/blog/blog-latest-posts";
import BlogPost from "@/presentation/components/common/blog/blog-post";

export default function Blog() {
  const backgroundImageUrl = Images.cartaoDebito;

  return (
    <>
      <Navbar />
      <BlogPost />
      <Footer />
    </>
  );
}
