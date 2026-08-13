import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What makes Voyara different?",
      answer:
        "Voyara blends your travel style, pace, and little preferences into one considered itinerary. It is less about checking boxes and more about finding the right rhythm for your trip.",
    },
    {
      question: "Can I change the itinerary it creates?",
      answer:
        "Absolutely. Your itinerary is a starting point, not a fixed plan. You can adjust destinations, activities, hotels, and other details to make the journey truly yours.",
    },
    {
      question: "How much does it cost?",
      answer:
        "You can start shaping your first journey for free. More ways to save, edit, and keep your plans will be available as Voyara grows.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        bg-[#0a0f18]
        text-white
        py-24
        sm:py-28
        lg:py-32
        overflow-hidden
      "
    >
      {/* Subtle background glow */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[400px]
          h-[400px]
          bg-[#d9b438]/5
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[350px]
          h-[350px]
          bg-blue-500/5
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Main container */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
          gap-16
          lg:gap-24
        "
      >

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="lg:pt-2">

          {/* Small label */}

          <p
            className="
              text-[#d9b438]
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              font-semibold
            "
          >
            A few good questions
          </p>


          {/* Heading */}

          <h2
            className="
              mt-8
              font-serif
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-[0.92]
              tracking-[-0.045em]
            "
          >
            Wonder no
            <span className="block">
              more.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-8
              text-blue-200/70
              text-base
              sm:text-lg
              max-w-sm
              leading-7
            "
          >
            Still curious? We like that about you.
          </p>


          {/* Contact CTA */}

          <button
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-4
              text-[#f0df9a]
              font-semibold
              text-sm
              border-b
              border-[#d9b438]/30
              pb-2
              hover:border-[#d9b438]
              transition-all
              duration-300
            "
          >
            Talk to a human

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

        </div>


        {/* =====================================================
            RIGHT SIDE - FAQ
        ====================================================== */}

        <div className="border-t border-white/15">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  border-b
                  border-white/15
                "
              >

                {/* Question */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    py-7
                    sm:py-8
                    text-left
                    group
                  "
                >

                  <span
                    className="
                      font-serif
                      text-xl
                      sm:text-2xl
                      lg:text-[25px]
                      leading-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#f0df9a]
                    "
                  >
                    {faq.question}
                  </span>


                  {/* Circle */}

                  <span
                    className={`
                      shrink-0
                      w-8
                      h-8
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "border-[#d9b438]/40 bg-[#d9b438]/10"
                          : "border-[#d9b438]/20"
                      }
                    `}
                  >

                    <ChevronDown
                      size={17}
                      className={`
                        text-[#d9b438]
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180"
                            : "rotate-0"
                        }
                      `}
                    />

                  </span>

                </button>


                {/* Answer */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-7 sm:pb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <p
                      className="
                        max-w-3xl
                        text-blue-100/60
                        text-sm
                        sm:text-base
                        leading-7
                        pr-10
                      "
                    >
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FAQ;