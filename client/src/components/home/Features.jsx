function Features() {
  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center">
        Why Choose TripGenie AI?
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        <div className="shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold">🤖 AI Planner</h3>

          <p className="mt-4 text-gray-600">
            Generate personalized travel itineraries using AI.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold">💰 Budget Planning</h3>

          <p className="mt-4 text-gray-600">
            Estimate your travel expenses before your journey.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold">📍 Smart Recommendations</h3>

          <p className="mt-4 text-gray-600">
            Discover the best destinations based on your interests.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;