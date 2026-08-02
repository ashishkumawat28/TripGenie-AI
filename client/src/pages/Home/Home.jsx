import HomeNavbar from "../../components/home/HomeNavbar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import PopularDestinations from "../../components/home/PopularDestinations";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/home/Footer";

function Home() {
  return (
    <>
      <HomeNavbar />

      <Hero />

      <Features />

      <PopularDestinations />

      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;