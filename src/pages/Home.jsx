import HeroSection from "../components/HeroSection";
import Blog from "./Blog";
import Counter from "./Counter";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Counter />
      <Blog />
    </>
  );
};

export default Home;
