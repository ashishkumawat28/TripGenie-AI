import HomeNavbar from "../../components/home/HomeNavbar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import PopularDestinations from "../../components/home/PopularDestinations";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/home/Footer";
import HowItWorks from "../../components/home/HowItWorks";
import CTA from "../../components/home/CTA";
import FAQ from "../../components/home/FAQ";

function Home() {
  return (
    <>
      <HomeNavbar />

      <Hero />

      <PopularDestinations />

      <HowItWorks />

      <Features />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}

export default Home;