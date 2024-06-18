import { Navbar, Header } from "@/presentation/components/Common";
import Carousel from "../components/Carousel/carousel";
import Preview from "../components/Preview/preview";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Preview />
    </>
  );
};

export default Home;
