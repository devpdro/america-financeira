import {
  BlogHighlights,
  Faq,
  Footer,
  Header,
  HeaderNotForm,
  Navbar,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";
import BlogMostReads from "@/presentation/components/common/blog/blog-most-reads";
import BlogLatestPosts from "@/presentation/components/common/blog/blog-latest-posts";

export default function Blog() {
  const backgroundImageUrl = Images.cartaoDebito;

  return (
    <>
      <Navbar />
      <HeaderNotForm
        title="Blog da América Financeira"
        subtitle={
          <>
            Dicas, notícias e artigos para <br /> te ajudar a tomar as melhores{" "}
            <br />
            decisões financeiras
          </>
        }
        showParagraph="Acompanhe nossas últimas atualizações"
        showLoanRequest={false}
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <BlogMostReads />
      <Footer />
    </>
  );
}
