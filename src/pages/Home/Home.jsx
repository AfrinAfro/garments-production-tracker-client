import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import HowItWorks from "./HowItWorks";
import Workflow from "./Workflow";
import Metrics from "./Metrics";
import Testimonials from "./Testimonials";
import GlobalReach from "./GlobalReach";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <main className="bg-[#030712] text-white overflow-hidden">
      
      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT */}
      <div className="space-y-24 md:space-y-32 pb-24">

        <FeaturedProducts />

        <HowItWorks />

        <Workflow />

        <Metrics />

        <Testimonials />

        <GlobalReach />

        <Newsletter />

      </div>
    </main>
  );
};

export default Home;