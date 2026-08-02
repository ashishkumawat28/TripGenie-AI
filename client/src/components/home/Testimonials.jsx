function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "TripGenie planned my Goa trip perfectly. Everything was well organized!",
    },
    {
      name: "Priya Singh",
      review:
        "The AI suggestions were amazing. It saved us hours of planning.",
    },
    {
      name: "Aman Verma",
      review:
        "Beautiful UI and excellent itinerary recommendations. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          ⭐ What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-lg">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;