import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ChevronDown,
  Compass,
  Sparkles,
  Users,
} from "lucide-react";

import heroImage from "../../assets/hero-bg.jpeg";


function Hero() {

  const navigate = useNavigate();

  const [destination, setDestination] = useState("Japan");
  const [mood, setMood] = useState("Slow & soulful");
  const [travelers, setTravelers] = useState("2 travelers");


  const handleStartPlanning = () => {
    navigate("/register");
  };


  return (

    <section
      id="hero"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#0a0f18]
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          scale-105
        "
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />


      {/* =====================================================
          DARK OVERLAYS
      ====================================================== */}

      {/* Overall dark layer */}

      <div
        className="
          absolute
          inset-0
          bg-black/35
        "
      />


      {/* Left dark gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#080d16]/95
          via-[#080d16]/60
          to-transparent
        "
      />


      {/* Bottom dark gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[42%]
          bg-gradient-to-t
          from-[#080d16]
          via-[#080d16]/85
          to-transparent
        "
      />


      {/* Top dark gradient */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-[#080d16]/10
          to-transparent
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          min-h-screen
          max-w-[1280px]
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          pt-32
          sm:pt-36
          lg:pt-40
          pb-24
          flex
          flex-col
        "
      >

        {/* =================================================
            HERO MAIN AREA
        ================================================== */}

        <div
          className="
            flex-1
            grid
            grid-cols-1
            lg:grid-cols-[1fr_400px]
            xl:grid-cols-[1fr_420px]
            gap-8
            lg:gap-12
            items-start
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              max-w-[570px]
              pt-0
              lg:pt-2
              xl:pt-8
            "
          >

            {/* Eyebrow */}

            <div
              className="
                flex
                items-center
                gap-3
                mb-7
              "
            >

              <span
                className="
                  block
                  w-7
                  h-[1px]
                  bg-[#d9b438]
                "
              />

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-white/75
                "
              >
                AI-powered travel, humanly designed
              </p>

            </div>


            {/* Main heading */}

            <h1
              className="
                font-serif font-normal
                text-[3rem]
                sm:text-[3.8rem]
                md:text-[4.5rem]
                lg:text-[4.5rem]
                xl:text-[4.9rem]
                leading-[0.88]
                tracking-[-0.05em]
              "
            >

              <span className="block text-white">
                Go somewhere
              </span>

              <span
                className="
                  block
                  italic text-[#f0df9a]
                  mt-2
                "
              >
                that feels like you.
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-[480px]
                text-sm
                sm:text-base
                lg:text-[15px]
                leading-7
                text-white/65
              "
            >
              voyara turns the way you want to feel
              into a journey worth remembering.
            </p>


            {/* CTA Buttons */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-start
                gap-5
                mt-9
              "
            >

              {/* Primary */}

              <button
                onClick={handleStartPlanning}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  bg-[#d9b438]
                  text-[#0a0f18]
                  px-7
                  py-4
                  min-w-[190px]
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[#ead05b]
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(217,180,56,0.2)]
                "
              >

                Design my escape

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>


              {/* Secondary */}

              <button
                onClick={() => {
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-1
                  py-4
                  text-white/80
                  text-sm
                  font-medium
                  border-b
                  border-white/30
                  hover:text-white
                  hover:border-[#d9b438]
                  transition-all
                  duration-300
                "
              >

                Explore inspiration

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

            </div>

          </div>



          {/* =================================================
              RIGHT — voyara CANVAS
          ================================================== */}

          <div
            className="
              w-full
              max-w-[440px]
              mx-auto
              lg:mx-0
              lg:ml-auto
              lg:mt-28
              xl:mt-60
            "
          >

            <div
              className="
                relative
                bg-[#111827]/95
                border
                border-[#d9b438]/30
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                p-5
                sm:p-6
              "
            >

              {/* =================================================
                  CARD TOP
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-5
                  border-b
                  border-white/10
                "
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#9bd15b]
                      shadow-[0_0_10px_rgba(155,209,91,0.8)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]
                      tracking-[0.12em]
                      uppercase
                      text-white/55
                    "
                  >
                    Your next chapter starts here
                  </span>

                </div>


                <span
                  className="
                    text-[10px]
                    text-[#d9b438]
                    tracking-wider
                  "
                >
                  01 / 03
                </span>

              </div>


              {/* =================================================
                  CARD TITLE
              ================================================== */}

              <div className="pt-7">

                <p
                  className="
                    text-[#d9b438]
                    text-[10px]
                    sm:text-xs
                    tracking-[0.2em]
                    font-semibold
                  "
                >
                  The voyara canvas
                </p>


                <h2
                  className="
                    mt-4
                    font-serif
                    text-4xl
                    sm:text-[2.7rem]
                    leading-[0.9]
                    tracking-[-0.04em]
                  "
                >

                  Tell us what

                  <span
                    className="
                      block
                      italic
                      text-[#f0df9a]
                      mt-1
                    "
                  >
                    moves you.
                  </span>

                </h2>

              </div>


              {/* =================================================
                  DESTINATION
              ================================================== */}

              <div className="mt-8">

                <label
                  className="
                    block
                    text-xs
                    text-white/45
                    mb-2
                  "
                >
                  Where are you dreaming of?
                </label>


                <div className="relative">

                  <Compass
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#d9b438]
                      pointer-events-none
                    "
                  />


                  <select
                    value={destination}
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                    className="
                      w-full
                      appearance-none
                      bg-[#182133]
                      border
                      border-white/15
                      text-white
                      pl-11
                      pr-10
                      py-4
                      text-sm
                      outline-none
                      focus:border-[#d9b438]/60
                      transition
                    "
                  >

                    <option>Japan</option>
                    <option>Italy</option>
                    <option>France</option>
                    <option>Switzerland</option>
                    <option>Bali</option>
                    <option>Kashmir</option>
                    <option>Goa</option>

                  </select>


                  <ChevronDown
                    size={17}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-[#d9b438]
                      pointer-events-none
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  MOOD + TRAVELERS
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                  mt-5
                "
              >

                {/* Mood */}

                <div>

                  <label
                    className="
                      block
                      text-xs
                      text-white/45
                      mb-2
                    "
                  >
                    Your travel mood
                  </label>


                  <div className="relative">

                    <select
                      value={mood}
                      onChange={(e) =>
                        setMood(e.target.value)
                      }
                      className="
                        w-full
                        appearance-none
                        bg-[#182133]
                        border
                        border-white/15
                        text-white
                        px-4
                        py-4
                        pr-9
                        text-sm
                        outline-none
                        focus:border-[#d9b438]/60
                      "
                    >

                      <option>
                        Slow & soulful
                      </option>

                      <option>
                        Adventure
                      </option>

                      <option>
                        Luxury
                      </option>

                      <option>
                        Romantic
                      </option>

                      <option>
                        Cultural
                      </option>

                    </select>


                    <ChevronDown
                      size={16}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#d9b438]
                        pointer-events-none
                      "
                    />

                  </div>

                </div>


                {/* Travelers */}

                <div>

                  <label
                    className="
                      block
                      text-xs
                      text-white/45
                      mb-2
                    "
                  >
                    Who's coming?
                  </label>


                  <div className="relative">

                    <Users
                      size={17}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-[#d9b438]
                        pointer-events-none
                      "
                    />


                    <select
                      value={travelers}
                      onChange={(e) =>
                        setTravelers(e.target.value)
                      }
                      className="
                        w-full
                        appearance-none
                        bg-[#182133]
                        border
                        border-white/15
                        text-white
                        pl-10
                        pr-9
                        py-4
                        text-sm
                        outline-none
                        focus:border-[#d9b438]/60
                      "
                    >

                      <option>
                        1 traveler
                      </option>

                      <option>
                        2 travelers
                      </option>

                      <option>
                        3 travelers
                      </option>

                      <option>
                        4 travelers
                      </option>

                      <option>
                        5+ travelers
                      </option>

                    </select>


                    <ChevronDown
                      size={16}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#d9b438]
                        pointer-events-none
                      "
                    />

                  </div>

                </div>

              </div>


              


              {/* =================================================
                  GENERATE BUTTON
              ================================================== */}

              <button
                onClick={handleStartPlanning}
                className="
                  group
                  w-full
                  mt-5
                  bg-[#d9b438]
                  text-[#0a0f18]
                  py-4
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                  hover:bg-[#ead05b]
                "
              >

                Generate my itinerary

                <Sparkles
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />

              </button>

            </div>

          </div>

        </div>


        


        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        <div
          className="
            relative
            mt-12
            lg:mt-6
            border-b
            border-white/10
            pt-6
            pb-2
            grid
            grid-cols-2
            lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.5fr]
            gap-6
            items-center
          "
        >

          {/* Label */}

          <div
            className="
              hidden
              lg:block
            "
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#d9b438]
                font-semibold
              "
            >
              The new way to travel
            </p>

          </div>


          {/* Stat 1 */}

          <div
            className="
              border-l
              border-white/10
              pl-5
            "
          >

            <p
              className="
                font-serif
                text-2xl
                sm:text-3xl
              "
            >
              12k+
            </p>

            <p
              className="
                text-[9px]
                sm:text-[10px]
                text-white/40
                mt-1
              "
            >
              dreamers inspired
            </p>

          </div>


          {/* Stat 2 */}

          <div
            className="
              border-l
              border-white/10
              pl-5
            "
          >

            <p
              className="
                font-serif
                text-2xl
                sm:text-3xl
              "
            >
              86
            </p>

            <p
              className="
                text-[9px]
                sm:text-[10px]
                text-white/40
                mt-1
              "
            >
              destinations mapped
            </p>

          </div>


          {/* Stat 3 */}

          <div
            className="
              border-l
              border-white/10
              pl-5
            "
          >

            <p
              className="
                font-serif
                text-2xl
                sm:text-3xl
              "
            >
              4.9/5
            </p>

            <p
              className="
                text-[9px]
                sm:text-[10px]
                text-white/40
                mt-1
              "
            >
              from early explorers
            </p>

          </div>


          {/* Quote */}

          <div
            className="
              hidden
              lg:block
              text-right
            "
          >

            <p
              className="
                font-serif
                italic
                text-white/55
                text-sm
              "
            >
              "Finally, a plan that feels like mine."
            </p>

          </div>

        </div>

        

      </div>

    </section>
  );
}


export default Hero;