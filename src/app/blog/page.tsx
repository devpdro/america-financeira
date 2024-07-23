import { Footer, Header, Navbar } from "@/presentation/components/common";
import { Images } from "@/presentation/assets";
import BlogRecent from "@/presentation/components/common/blog/blog-recent";

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
      <BlogRecent />
      <Footer />
    </>
  );
}
