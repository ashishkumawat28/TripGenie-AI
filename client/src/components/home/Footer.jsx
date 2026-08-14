import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0a0f18]
        text-white
        border-t
        border-white/10
      "
    >

      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#d9b438]/5
          blur-[160px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/5
          blur-[160px]
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          pt-20
          sm:pt-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
            lg:gap-16
            py-16
            sm:py-20
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-2">

            {/* Logo */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                group
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#d9b438]/40
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-[#d9b438]/10
                "
              >

                <img src={logo} alt="Voyaralogo" />

              </div>


              <div>

                <h3
                  className="
                    font-serif
                    text-2xl
                    sm:text-3xl
                  "
                >
                  Voyara
                </h3>

                <p
                  className="
                    text-[10px]
                    tracking-[0.25em]
                    uppercase
                    text-white/40
                    mt-1
                  "
                >
                  AI Travel Planner
                </p>

              </div>

            </Link>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-md
                text-white/50
                leading-7
                text-sm
                sm:text-base
              "
            >
              Travel planning shaped around you.
              Discover destinations, build thoughtful
              itineraries, and turn your next idea into
              a journey worth remembering.
            </p>


            {/* Email */}

            <a
              href="mailto:voyara.ai@gmail.com"
              className="
                inline-flex
                items-center
                gap-3
                mt-7
                text-white/60
                hover:text-[#f0df9a]
                transition-colors
                text-sm
              "
            >

              <Mail
                size={17}
                className="text-[#d9b438]"
              />

              voyara.ai@gmail.com

            </a>

          </div>


          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>

            <h4
              className="
                text-[#d9b438]
                uppercase
                tracking-[0.2em]
                text-xs
                font-semibold
                mb-7
              "
            >
              Explore
            </h4>


            <div
              className="
                flex
                flex-col
                gap-5
                text-white/55
                text-sm
              "
            >

              <ScrollLink
                to="hero"
                smooth
                duration={600}
                offset={-80}
                className="
                  cursor-pointer
                  hover:text-white
                  transition-colors
                "
              >
                Home
              </ScrollLink>


              <ScrollLink
                to="how-it-works"
                smooth
                duration={600}
                offset={-80}
                className="
                  cursor-pointer
                  hover:text-white
                  transition-colors
                "
              >
                How it works
              </ScrollLink>


              <ScrollLink
                to="features"
                smooth
                duration={600}
                offset={-80}
                className="
                  cursor-pointer
                  hover:text-white
                  transition-colors
                "
              >
                Features
              </ScrollLink>


              <ScrollLink
                to="destinations"
                smooth
                duration={600}
                offset={-80}
                className="
                  cursor-pointer
                  hover:text-white
                  transition-colors
                "
              >
                Destinations
              </ScrollLink>


              <ScrollLink
                to="faq"
                smooth
                duration={600}
                offset={-80}
                className="
                  cursor-pointer
                  hover:text-white
                  transition-colors
                "
              >
                FAQs
              </ScrollLink>

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h4
              className="
                text-[#d9b438]
                uppercase
                tracking-[0.2em]
                text-xs
                font-semibold
                mb-7
              "
            >
              Contact
            </h4>


            <div
              className="
                flex
                flex-col
                gap-5
                text-white/55
                text-sm
              "
            >

              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="
                    text-[#d9b438]
                    mt-0.5
                    shrink-0
                  "
                />

                <span>
                  India
                </span>

              </div>


              <a
                href="mailto:voyara.ai@gmail.com"
                className="
                  hover:text-white
                  transition-colors
                "
              >
                voyara.ai@gmail.com
              </a>


              <Link
                to="/login"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[#f0df9a]
                  w-fit
                "
              >

                Login

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </Link>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            border-t
            border-white/10
            py-7
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            text-xs
            text-white/35
          "
        >

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} voyara.
            All rights reserved.
          </p>


          <p className="text-center">
            Designed & Developed by{" "}
            <span className="text-[#d9b438]">
              Ashish Kumawat
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;