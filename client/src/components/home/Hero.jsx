import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero1.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            ✈️ AI Powered Travel Planner
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Plan Your
            <span className="text-blue-600"> Dream Vacation </span>
            with AI
          </h1>

          <p className="text-gray-600 text-xl mt-6 leading-8">
            Generate personalized travel itineraries, discover amazing
            destinations, save trips, and manage your adventures with
            TripGenie AI.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              🚀 Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              Login
            </button>

          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Travel"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;