
import { ArrowUpRight } from "lucide-react";

function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Amalfi Coast",
      country: "Italy",
      category: "Slow Escape",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
      size: "large",
    },
    {
      id: 2,
      name: "Kyoto",
      country: "Japan",
      category: "Quiet Wonder",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
      size: "normal",
    },
    {
      id: 3,
      name: "Dolomites",
      country: "Italy",
      category: "Wild Horizon",
      image:
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
      size: "normal",
    },
  ];

  return (
    <section
      id="destinations"
      className="
        relative
        bg-[#080d14]
        text-white
        py-28
        sm:py-32
        lg:py-36
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          left-1/4
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#d7b83d]/[0.035]
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/[0.025]
          blur-[160px]
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTAINER
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
        "
      >

        {/* =================================================
            HEADING
        ================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-10
          "
        >

          {/* Left */}

          <div>

            <div
              className="
                flex
                items-center
                gap-4
                mb-7
              "
            >

              <span
                className="
                  h-px
                  w-10
                  bg-[#d9b83d]
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  tracking-[0.25em]
                  uppercase
                  font-semibold
                  text-[#d9b83d]
                "
              >
                Curated, not crowded
              </span>

            </div>


            <h2
              className="
                max-w-3xl
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-serif
                font-medium
                leading-[0.95]
                tracking-[-0.035em]
              "
            >

              A little inspiration

              <span
                className="
                  block
                  text-[#f1d985]
                  italic
                  mt-2
                "
              >
                for your next maybe.
              </span>

            </h2>

          </div>


          {/* Arrow Button */}

          <button
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            className="
              hidden
              lg:flex
              w-16
              h-16
              rounded-full
              border
              border-[#d9b83d]/30
              items-center
              justify-center
              text-[#e4c34d]
              hover:bg-[#d9b83d]
              hover:text-[#080d14]
              hover:border-[#d9b83d]
              transition-all
              duration-300
              group
              shrink-0
            "
          >

            <ArrowUpRight
              size={24}
              className="
                group-hover:translate-x-1
                group-hover:-translate-y-1
                transition
              "
            />

          </button>

        </div>


        {/* =================================================
            DESTINATION GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
            mt-14
            lg:mt-16
          "
        >

          {destinations.map((destination, index) => (

            <div
              key={destination.id}
              className={`
                group
                relative
                overflow-hidden
                bg-[#111923]
                cursor-pointer
                ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-1 lg:row-span-1"
                    : ""
                }
                aspect-[4/5]
                lg:aspect-[4/5]
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <img
                src={destination.image}
                alt={destination.name}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                "
              />


              {/* =================================================
                  IMAGE DARK OVERLAY
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-black/5
                "
              />


              {/* Hover Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[#d8b83d]/0
                  group-hover:bg-[#d8b83d]/[0.04]
                  transition
                  duration-500
                "
              />


              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  sm:p-7
                "
              >

                {/* Category */}

                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#e7c64f]
                    font-semibold
                  "
                >
                  {destination.category}
                </p>


                {/* Name */}

                <h3
                  className="
                    mt-3
                    text-3xl
                    sm:text-4xl
                    font-serif
                    font-medium
                    text-white
                    tracking-[-0.02em]
                  "
                >
                  {destination.name}
                </h3>


                {/* Country */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-2
                    text-sm
                    text-white/70
                  "
                >

                  <span>
                    {destination.country}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  TOP RIGHT ARROW
              ================================================== */}

              <div
                className="
                  absolute
                  top-5
                  right-5
                  w-11
                  h-11
                  rounded-full
                  bg-black/20
                  backdrop-blur-md
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                  opacity-0
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >

                <ArrowUpRight size={19} />

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            MOBILE / BOTTOM CTA
        ================================================== */}

        <div
          className="
            flex
            justify-center
            mt-12
            lg:hidden
          "
        >

          <button
            className="
              w-14
              h-14
              rounded-full
              border
              border-[#d9b83d]/40
              flex
              items-center
              justify-center
              text-[#e4c34d]
            "
          >

            <ArrowUpRight size={21} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default PopularDestinations;