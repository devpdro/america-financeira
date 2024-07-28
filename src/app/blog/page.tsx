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

export default function Blog() {
  const backgroundImageUrl = Images.payrollLoan;

  return (
    <>
      <Navbar />
      <Header
        title="Empréstimo Consignado"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os
            seus sonhos
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        showDetails={true}
        backgroundImage={backgroundImageUrl.src}
      />
      <BlogMostReads />
      <BlogLatestPosts />
      <BlogHighlights />
      <Footer />
    </>
  );
}
