import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      quote:
        'It did not just tell me where to go. It understood why I wanted to go.',
      name: "Anika Mehta",
      details: "Early explorer · Lisbon to Kyoto",
      initials: "AM",
    },
    {
      quote:
        'Voyara did not just plan my trip. It made the whole journey feel personal.',
      name: "Rahul Sharma",
      details: "Weekend explorer · Goa to Kerala",
      initials: "RS",
    },
    {
      quote:
        'Planning my vacation became incredibly simple. Every recommendation felt made for me.',
      name: "Priya Singh",
      details: "Curious traveler · Paris to Rome",
      initials: "PS",
    },
    {
      quote:
        'I finally found a travel planner that listens. My itinerary felt exactly like my kind of trip.',
      name: "Aman Verma",
      details: "Adventure seeker · Bali to Ubud",
      initials: "AV",
    },
    {
      quote:
        'It gave me more than a list of places. It gave me a journey I actually wanted to take.',
      name: "Neha Kapoor",
      details: "Slow traveler · Manali to Ladakh",
      initials: "NK",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentIndex];

  return (
    <section
      className="
        relative
        min-h-[400px]
        sm:min-h-[440px]
        bg-[#d9b438]
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Quote mark */}

      <div
        className="
          absolute
          top-14
          left-[12%]
          font-serif
          text-[110px]
          sm:text-[130px]
          leading-none
          text-[#17243b]/15
          pointer-events-none
        "
      >
        “
      </div>

      {/* Main */}

      <div className="relative w-full px-6 sm:px-10 lg:px-16 py-20">

        {/* Slider */}

        <div className="max-w-6xl mx-auto overflow-hidden">

          <div
            key={currentIndex}
            className="
              animate-review-slide
              text-center
            "
          >

            {/* Review */}

            <h2
              className="
                font-serif
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[4rem]
                leading-[1]
                tracking-[-0.04em]
                text-[#080d15]
                max-w-5xl
                mx-auto
              "
            >
              {review.quote}
            </h2>

            {/* User */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                mt-10
              "
            >

              {/* Avatar */}

              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#17243b]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-semibold
                  shrink-0
                "
              >
                {review.initials}
              </div>

              {/* Details */}

              <div className="text-left">

                <p className="text-[#080d15] font-semibold text-sm">
                  {review.name}
                </p>

                <p className="text-[#17243b]/60 text-xs mt-1">
                  {review.details}
                </p>

              </div>

              {/* Stars */}

              <div className="flex gap-1 ml-5">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    strokeWidth={0}
                    className="fill-[#17243b] text-[#17243b]"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Progress */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            mt-12
          "
        >

          {reviews.map((_, index) => (
            <div
              key={index}
              className="
                relative
                w-8
                h-[3px]
                overflow-hidden
                rounded-full
                bg-[#17243b]/20
              "
            >
              {index === currentIndex && (
                <div
                  key={currentIndex}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    bg-[#17243b]
                    rounded-full
                    animate-testimonial-progress
                  "
                />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;