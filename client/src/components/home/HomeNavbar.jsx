
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  Menu,
  X,
  Plane,
  Home,
  Sparkles,
  MapPinned,
  Mail,
  ArrowRight,
} from "lucide-react";

function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollOffset = -100;

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-3 lg:px-5 pt-1.5 sm:pt-3">

        <div
          className="
            max-w-7xl
            mx-auto
            h-[60px]
            sm:h-[60px]
            px-4
            sm:px-6
            lg:px-7

            rounded-6xl
            sm:rounded-4xl

            bg-black/20
            backdrop-blur-2xl

            border
            border-white/15

            shadow-2xl

            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <ScrollLink
            to="hero"
            smooth
            duration={600}
            offset={scrollOffset}
            className="cursor-pointer"
            onClick={closeMenu}
          >

            <div className="flex items-center gap-2.5 sm:gap-3 group">

              {/* Logo Icon */}

              <div
                className="
                  w-8
                  h-8
                  sm:w-9
                  sm:h-9

                  rounded-xl
                  sm:rounded-2xl

                  bg-white/10
                  backdrop-blur-xl

                  border
                  border-white/20

                  flex
                  items-center
                  justify-center

                  group-hover:bg-white/20
                  group-hover:-rotate-6

                  transition-all
                  duration-300
                "
              >

                <img src={`/src/assets/logo.png`} alt="logo" />

              </div>


              {/* Logo Text */}

              <div className="leading-none">

                <h1
                  className="
                    text-xl
                    sm:text-xl
                    lg:text-xl
                    font-extrabold
                    tracking-tight
                    font-serif
                    font-normal
                    text-[#f0d77d]
                  "
                >
                  VOYARA
                  <span className="text-cyan-300">
                    {" "}AI
                  </span>
                </h1>

              </div>

            </div>

          </ScrollLink>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}

            <ScrollLink
              to="hero"
              smooth
              duration={600}
              offset={scrollOffset}
              className="
                group
                cursor-pointer
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                text-white/75
                hover:text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <Home
                size={17}
                className="
                  text-white/60
                  group-hover:text-cyan-300
                  transition
                "
              />

              Home

            </ScrollLink>


            {/* Destinations */}

            <ScrollLink
              to="destinations"
              smooth
              duration={600}
              offset={scrollOffset}
              className="
                group
                cursor-pointer
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                text-white/75
                hover:text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <MapPinned
                size={17}
                className="
                  text-white/60
                  group-hover:text-green-300
                  transition
                "
              />

              Destinations

            </ScrollLink>
            


            {/* Features */}

            <ScrollLink
              to="how-it-works"
              smooth
              duration={600}
              offset={scrollOffset}
              className="
                group
                cursor-pointer
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                text-white/75
                hover:text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <Sparkles
                size={17}
                className="
                  text-white/60
                  group-hover:text-yellow-300
                  transition
                "
              />

              How it Works

            </ScrollLink>


            


            {/* Contact */}

            <ScrollLink
              to="contact"
              smooth
              duration={600}
              offset={scrollOffset}
              className="
                group
                cursor-pointer
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                text-white/75
                hover:text-white
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <Mail
                size={17}
                className="
                  text-white/60
                  group-hover:text-pink-300
                  transition
                "
              />

              Contact

            </ScrollLink>

          </div>


          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden lg:flex items-center gap-3">

            {/* Login */}

            <Link
              to="/login"
              className="
                px-3.5
                py-1.5
                rounded-xl

                bg-[#d9b438]
                text-[#0a0f18]
                backdrop-blur-xl

                border
                border-white/20

                italic
                font-medium
                hover:bg-[#ead05b]
              
                hover:-translate-y-0.5

                transition-all
                duration-300
              "
            >
              Login
            </Link>


            {/* Start Planning */}

            <Link
              to="/register"
              className="
                group

                flex
                items-center
                gap-2

                px-3.5
                py-1.5

                rounded-xl

                bg-cyan-500/90
                hover:bg-cyan-400

                text-white
                italic
                font-semibold

                shadow-lg
                shadow-cyan-500/20

                hover:-translate-y-0.5

                transition-all
                duration-300
              "
            >

              Start Planning

              <ArrowRight
                size={17}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />

            </Link>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            onClick={() => setMenuOpen(true)}
            className="
              lg:hidden

              w-11
              h-11

              rounded-xl

              bg-white/10
              backdrop-blur-xl

              border
              border-white/20

              flex
              items-center
              justify-center

              text-white

              hover:bg-white/20

              transition
            "
            aria-label="Open menu"
          >

            <Menu size={24} />

          </button>

        </div>

      </nav>


      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[60]

          bg-black/60
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />


      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        className={`
          fixed
          top-0
          right-0
          bottom-0

          w-[85%]
          max-w-sm

          z-[70]

          bg-black/55
          backdrop-blur-2xl

          border-l
          border-white/15

          shadow-2xl

          transition-transform
          duration-500
          ease-out

          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Mobile Header */}

        <div
          className="
            flex
            items-center
            justify-between

            px-5
            py-5

            border-b
            border-white/10
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10

                rounded-xl

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center
              "
            >

              <Plane
                size={21}
                className="text-cyan-300"
              />

            </div>


            <div>

              <h2 className="text-xl font-bold text-white">
                VOYARA
                <span className="text-cyan-300">
                  {" "}AI
                </span>
              </h2>

              <p className="text-[10px] text-white/45 tracking-widest uppercase">
                Travel smarter
              </p>

            </div>

          </div>


          <button
            onClick={closeMenu}
            className="
              w-10
              h-10

              rounded-xl

              bg-white/10
              border
              border-white/15

              flex
              items-center
              justify-center

              text-white

              hover:bg-white/20

              transition
            "
            aria-label="Close menu"
          >

            <X size={22} />

          </button>

        </div>


        {/* Mobile Navigation */}

        <div className="p-5 flex flex-col gap-2">

          <ScrollLink
            to="hero"
            smooth
            duration={600}
            offset={scrollOffset}
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-4

              px-4
              py-4

              rounded-2xl

              text-white/80

              hover:text-white
              hover:bg-white/10

              cursor-pointer

              transition
            "
          >

            <Home
              size={20}
              className="text-cyan-300"
            />

            Home

          </ScrollLink>


          <ScrollLink
            to="features"
            smooth
            duration={600}
            offset={scrollOffset}
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-4

              px-4
              py-4

              rounded-2xl

              text-white/80

              hover:text-white
              hover:bg-white/10

              cursor-pointer

              transition
            "
          >

            <Sparkles
              size={20}
              className="text-yellow-300"
            />

            Features

          </ScrollLink>


          <ScrollLink
            to="destinations"
            smooth
            duration={600}
            offset={scrollOffset}
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-4

              px-4
              py-4

              rounded-2xl

              text-white/80

              hover:text-white
              hover:bg-white/10

              cursor-pointer

              transition
            "
          >

            <MapPinned
              size={20}
              className="text-green-300"
            />

            Destinations

          </ScrollLink>


          <ScrollLink
            to="contact"
            smooth
            duration={600}
            offset={scrollOffset}
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-4

              px-4
              py-4

              rounded-2xl

              text-white/80

              hover:text-white
              hover:bg-white/10

              cursor-pointer

              transition
            "
          >

            <Mail
              size={20}
              className="text-pink-300"
            />

            Contact

          </ScrollLink>


          <div className="h-px bg-white/10 my-4" />


          {/* Login */}

          <Link
            to="/login"
            onClick={closeMenu}
            className="
              w-full
              text-center

              py-3.5

              rounded-xl

              bg-white/10
              border
              border-white/20

              text-white
              font-semibold

              hover:bg-white/20

              transition
            "
          >
            Login
          </Link>


          {/* Register */}

          <Link
            to="/register"
            onClick={closeMenu}
            className="
              w-full

              flex
              items-center
              justify-center
              gap-2

              py-3.5

              rounded-xl

              bg-cyan-500
              hover:bg-cyan-400

              text-white
              font-semibold

              shadow-lg

              transition
            "
          >

            Start Planning

            <ArrowRight size={18} />

          </Link>

        </div>


        {/* Bottom message */}

        <div
          className="
            absolute
            bottom-6
            left-5
            right-5

            rounded-2xl

            bg-white/5

            border
            border-white/10

            p-4

            text-center
          "
        >

          <p className="text-sm text-white/50">
            Your next adventure starts here ✈️
          </p>

        </div>

      </aside>
    </>
  );
}

export default HomeNavbar;