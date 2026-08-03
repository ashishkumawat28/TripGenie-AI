import { Link, useLocation } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";


function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-700">
          ✈️ TripGenie AI
        </h1>

        <div className="flex items-center gap-8">

          <ScrollLink
            to="hero"
            smooth={true}
            duration={200}
            offset={-100}
            spy={true}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="features"
            smooth
            duration={200}
            offset={-100}
            spy
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Features
          </ScrollLink>

          <ScrollLink
              to="destinations"
              smooth
              duration={200}
              offset={-100}
              spy
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Destinations
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={200}
            offset={-100}
            spy
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Contact
          </ScrollLink>

          <div className="flex items-center gap-4">
        
  
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1.5 pb-2 rounded-xl transition duration-300 hover:scale-105"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-1.5 pb-2 rounded-xl transition duration-300 hover:scale-105"
          >
            Register
          </Link>
          </div>
          

        </div>

      </div>

    </nav>
  );
}

export default HomeNavbar;