import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Workflow from "./Workflow";
import Metrics from "./Metrics";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import GlobalReach from "./GlobalReach";

const Home = () => {
  return (
    <div className="bg-[#020817] overflow-hidden">
      <Hero />

      <FeaturedProducts />

      <Workflow />

      <Metrics />

      <HowItWorks />

      <GlobalReach />

      <Testimonials />

      <Newsletter />
    </div>
  );
};

export default Home;