import SearchBox from "./SearchBox";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Plan Your Dream Trip
        </h1>

        <span className="block text-blue-400 mt-2">
          with AI
        </span>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Generate personalized travel itineraries,
          discover amazing destinations,
          and plan unforgettable journeys using AI.
        </p>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Start Planning
        </button>
      </motion.div>
      <SearchBox />
    </section>
  );
}

export default Hero;