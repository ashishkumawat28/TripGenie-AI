import { Sparkles, Compass, Plane } from "lucide-react";

function Features() {
  const features = [
    {
      number: "01",
      icon: Sparkles,
      title: "Share your spark",
      description:
        "Tell us the feeling, the pace, and the things you cannot stop thinking about.",
    },
    {
      number: "02",
      icon: Compass,
      title: "We find the thread",
      description:
        "Our AI connects the dots between your taste and the places that match it.",
    },
    {
      number: "03",
      icon: Plane,
      title: "You start arriving",
      description:
        "Get a considered itinerary that leaves room for serendipity along the way.",
    },
  ];

  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#080d14]
        text-white
        py-28
        sm:py-32
        lg:py-36
      "
    >
      {/* Subtle background glow */}

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[300px]
          rounded-full
          bg-[#d8b63f]/[0.025]
          blur-[140px]
          pointer-events-none
        "
      />

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

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-[#d8b63f]
              text-[11px]
              sm:text-xs
              font-semibold
              tracking-[0.28em]
              mb-7
            "
          >
            THE EASY PART
          </p>

          <h2
            className="
              font-serif
              font-normal
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-[0.92]
              tracking-[-0.045em]
            "
          >
            From daydream

            <span
              className="
                block
                mt-2
                text-[#f0d77d]
                italic
              "
            >
              to departure.
            </span>
          </h2>

        </div>


        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div
          className="
            mt-20
            border-t
            border-white/10
            grid
            grid-cols-1
            md:grid-cols-3
          "
        >

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className={`
                  relative
                  py-10
                  lg:py-12
                  px-0
                  md:px-8
                  lg:px-10
                  group

                  ${
                    index !== 0
                      ? "md:border-l border-white/10"
                      : ""
                  }

                  ${
                    index !== 0
                      ? "border-t md:border-t-0 border-white/10"
                      : ""
                  }
                `}
              >

                {/* Number */}

                <div
                  className="
                    absolute
                    top-7
                    right-0
                    md:right-8
                    lg:right-10
                    font-serif
                    italic
                    text-sm
                    text-[#d8b63f]
                  "
                >
                  {feature.number}
                </div>


                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    border
                    border-[#d8b63f]/30
                    flex
                    items-center
                    justify-center
                    text-[#d8b63f]
                    transition-all
                    duration-500
                    group-hover:border-[#d8b63f]
                    group-hover:bg-[#d8b63f]/5
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                  />
                </div>


                {/* Title */}

                <h3
                  className="
                    mt-10
                    font-serif
                    text-2xl
                    sm:text-3xl
                    font-normal
                    text-white
                  "
                >
                  {feature.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-sm
                    text-sm
                    sm:text-base
                    leading-7
                    text-[#91a0ba]
                  "
                >
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>


      {/* Bottom border */}

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

export default Features;