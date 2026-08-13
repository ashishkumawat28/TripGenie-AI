import { ArrowRight, Compass } from "lucide-react";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0b1324]
        text-white
        flex
        items-center
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          absolute
          top-1/2
          right-[15%]
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#d8b63f]/[0.035]
          blur-[100px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[300px]
          bg-blue-500/[0.025]
          blur-[120px]
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          py-4
          lg:py-28
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-5xl">

            {/* Eyebrow */}

            <div
              className="
                flex
                items-center
                gap-4
                mb-8
              "
            >

              <span
                className="
                  w-7
                  h-px
                  bg-[#d8b63f]
                "
              />

              <span
                className="
                  text-[#d8b63f]
                  text-[11px]
                  sm:text-xs
                  font-semibold
                  tracking-[0.28em]
                "
              >
                TRAVEL, REIMAGINED
              </span>

            </div>


            {/* Heading */}

            <h2
              className="
                font-serif
                font-normal
                text-[4rem]
                sm:text-[5rem]
                lg:text-[5.5rem]
                xl:text-[6rem]
                leading-[0.9]
                tracking-[-0.045em]
              "
            >

              Less planning.

              <span
                className="
                  block
                  mt-3
                  text-[#f0d77d]
                  italic
                "
              >
                More arriving.
              </span>

            </h2>


            {/* Description */}

            <p
              className="
                mt-9
                max-w-xl
                text-base
                sm:text-lg
                leading-8
                text-[#aab7cf]
              "
            >
              The best trips are not built from a checklist.
              They begin with a feeling, a fleeting idea, a
              place you can almost picture. Voyara listens
              for that spark, then shapes every detail around it.
            </p>


            {/* Link */}

            

            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-4
                pb-2
                border-b
                border-[#d8b63f]/30
                text-[#e5c34b]
                font-semibold
                text-sm
                hover:border-[#d8b63f]
                transition-all
              "
            >

              See how it works

              <ArrowRight
                size={18}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />

            </button>

          </div>


          {/* =================================================
              RIGHT ORBITAL VISUAL
          ================================================== */}

          <div
            className="
              relative
              min-h-[420px]
              sm:min-h-[500px]
              flex
              items-center
              justify-center
            "
          >

            {/* Label - TOP */}

            <span
              className="
                absolute
                top-[17%]
                right-[64%]
                text-[10px]
                sm:text-[11px]
                tracking-[0.16em]
                text-[#8d9ab2]
              "
            >
              YOUR PACE
            </span>


            {/* Label - RIGHT */}

            <span
              className="
                absolute
                top-[25%]
                right-[10%]
                -translate-y-1/2
                text-[10px]
                sm:text-[11px]
                tracking-[0.16em]
                text-[#8d9ab2]
              "
            >
              YOUR TASTE
            </span>


            {/* Label - BOTTOM */}

            <span
              className="
                absolute
                bottom-[19%]
                right-[17%]
                text-[10px]
                sm:text-[11px]
                tracking-[0.16em]
                text-[#8d9ab2]
              "
            >
              YOUR STORY
            </span>


            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                sm:w-[330px]
                sm:h-[330px]
                rounded-full
                border
                border-white/[0.08]
              "
            />


            {/* =================================================
                INNER GLOW
            ================================================== */}

            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                rounded-full
                bg-[#d8b63f]/[0.035]
                blur-[35px]
              "
            />


            {/* =================================================
                ORBIT RING
            ================================================== */}

            <div
              className="
                absolute
                w-[350px]
                h-[145px]
                sm:w-[410px]
                sm:h-[170px]
                rounded-[50%]
                border
                border-[#c9a82f]/30
                rotate-[-25deg]
              "
            />


            {/* =================================================
                SECOND ORBIT
            ================================================== */}

            <div
              className="
                absolute
                w-[300px]
                h-[300px]
                sm:w-[350px]
                sm:h-[350px]
                rounded-full
                border
                border-white/[0.035]
              "
            />


            {/* =================================================
                CENTER GLOW
            ================================================== */}

            <div
              className="
                absolute
                w-[150px]
                h-[150px]
                rounded-full
                bg-[#0f1a30]
                shadow-[0_0_70px_rgba(216,182,63,0.08)]
                flex
                items-center
                justify-center
              "
            >

              {/* Center icon */}

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#d8b63f]
                  flex
                  items-center
                  justify-center
                  bg-[#101b30]
                "
              >

                <Compass
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#d8b63f]"
                />

              </div>


              {/* Center text */}

              <div
                className="
                  absolute
                  top-[62%]
                  left-1/2
                  -translate-x-1/2
                  text-center
                  whitespace-nowrap
                "
              >

                <p
                  className="
                    font-serif
                    italic
                    text-[#d8b63f]
                    text-small
                  "
                >
                  your
                </p>

                <p
                  className="
                    font-serif
                    italic
                    text-[#d8b63f]
                    text-small
                    -mt-1
                  "
                >
                  north star
                </p>

              </div>

            </div>


            {/* =================================================
                SMALL ORBIT DOTS
            ================================================== */}

            <div
              className="
                absolute
                w-2
                h-2
                rounded-full
                bg-[#d8b63f]
                shadow-[0_0_12px_rgba(216,182,63,0.7)]
                top-[31%]
                right-[22%]
              "
            />

            <div
              className="
                absolute
                w-1.5
                h-1.5
                rounded-full
                bg-[#77839a]
                top-[24%]
                left-[30%]
              "
            />

            <div
              className="
                absolute
                w-1.5
                h-1.5
                rounded-full
                bg-[#77839a]
                bottom-[24%]
                right-[28%]
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BORDER
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-white/[0.07]
        "
      />

    </section>
  );
}

export default HowItWorks;