import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        bg-[#0a0f18]
        text-white
        px-6
        sm:px-10
        lg:px-14
        py-20
        overflow-hidden
      "
    >
      {/* Background glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[300px]
          bg-[#d9b438]/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      {/* CTA CARD */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          min-h-[430px]
          border
          border-[#d9b438]/25
          bg-[#111827]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >

        {/* Decorative circles */}

        <div
          className="
            absolute
            -bottom-24
            -right-16
            w-44
            h-44
            rounded-full
            border
            border-[#d9b438]/20
          "
        />

        <div
          className="
            absolute
            -bottom-16
            -right-8
            w-28
            h-28
            rounded-full
            border
            border-[#d9b438]/20
          "
        />

        {/* Content */}

        <div
          className="
            relative
            z-10
            text-center
            max-w-3xl
            px-6
          "
        >

          {/* Small heading */}

          <p
            className="
              text-[#d9b438]
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              font-semibold
              mb-7
            "
          >
            Your next chapter is waiting
          </p>


          {/* Main heading */}

          <h2
            className="
              font-serif
              text-5xl
              sm:text-6xl
              md:text-7xl
              leading-[0.95]
              tracking-[-0.04em]
            "
          >
            Where will you
            <span
              className="
                block
                italic
                text-[#f0df9a]
              "
            >
              feel most alive?
            </span>
          </h2>


          {/* CTA Button */}

          <button
            onClick={() => navigate("/register")}
            className="
              group
              mt-12
              inline-flex
              items-center
              justify-center
              gap-4
              bg-[#d9b438]
              text-[#0a0f18]
              px-8
              py-4
              font-semibold
              text-sm
              sm:text-base
              transition-all
              duration-300
              hover:bg-[#ead05b]
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(217,180,56,0.25)]
            "
          >
            <Sparkles
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            Start planning Now

            <ArrowRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>


          {/* Small supporting text */}

          <p
            className="
              mt-5
              text-white/45
              text-sm
            "
          >
            No complicated setup. Just tell us where you want to go.
          </p>

        </div>

      </div>

    </section>
  );
}

export default CTA;