
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import WeatherCard from "../../components/trip/WeatherCard";

import ShareTripModal from "../../components/trip/ShareTripModal";
import DestinationImage from "../../components/trip/DestinationImage";
import { generateTripPDF } from "../../utils/pdfGenerator";
import API from "../../api/authApi";

import TripHeader from "../../components/trip/TripHeader";
import DayCard from "../../components/trip/DayCard";
import TravelTips from "../../components/trip/TravelTips";

function Planner() {
  const { register, handleSubmit, reset } = useForm();

  const [image, setImage] = useState("");
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await API.post("/trip/generate", data);

      console.log("API Response:", res.data);

      setTrip({
        ...res.data.trip,
        travelStyle: data.travelStyle,
      });

      const weatherRes = await API.get(
        `/weather/${encodeURIComponent(res.data.trip.destination)}`
      );

      setWeather(weatherRes.data.weather);

      const imageRes = await API.get(
        `/image/${encodeURIComponent(res.data.trip.destination)}`
      );

      setImage(imageRes.data.image);

      toast.success("Trip Generated Successfully");

      reset();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } 
    finally {
      setLoading(false);
    }
  };

  const saveTrip = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/history/save",
        trip,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Trip Saved Successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to save trip"
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url("/src/assets/planner/planner-bg.jpg")`,
      }}
    >

      {/* Dark Overlay */}

      <div className="min-h-screen bg-black/45">
      

      
    
        <div className="max-w-7xl mx-auto px-6 pt-30 pb-10">

          {/* Hero */}

          {!trip && (

            <>

              <div className="text-center">

                <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm">

                  ✈️ AI Powered Trip Planner

                </span>

                <h1 className="text-5xl font-serif font-normal md:text-7xl font-bold text-white mt-8">

                  Plan Your

                  <span className="block text-cyan-300">

                    Dream Trip

                  </span>

                </h1>

                <p className="text-white/90 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-8">

                  Create your perfect journey in seconds.

                  Voyara AI builds personalized itineraries,

                  suggests destinations,

                  estimates budgets,

                  and helps you travel smarter.

                </p>

              </div>

              {/* Planner Form */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="
                  mt-13
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[30px]
                  shadow-2xl
                  p-8
                "
              >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  {/* Destination */}

                  <div>

                    <label className="text-white text-sm mb-2 block">

                      📍 Destination

                    </label>

                    <input
                      {...register("destination")}
                      placeholder="Goa"
                      required
                      className="
                        w-full
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-xl
                        px-5
                        py-4
                        text-white
                        placeholder:text-white/60
                        outline-none
                      "
                    />

                  </div>

                  {/* Days */}

                  <div>

                    <label className="text-white text-sm mb-2 block">

                      📅 Days

                    </label>

                    <input
                      type="number"
                      {...register("days")}
                      required
                      className="
                        w-full
                        bg-white/10
                        border
                        border-white/20
                        rounded-xl
                        px-5
                        py-4
                        text-white
                      "
                    />

                  </div>

                  {/* Budget */}

                  <div>

                    <label className="text-white text-sm mb-2 block">

                      💰 Budget

                    </label>

                    <select
                      {...register("budget")}
                      className="
                        w-full
                        bg-white/10
                        border
                        border-white/20
                        rounded-xl
                        px-5
                        py-4
                        text-white
                      "
                    >
                      <option className="text-black" value="Low">Low</option>

                      <option className="text-black" value="Medium">Medium</option>

                      <option className="text-black" value="Luxury">Luxury</option>

                    </select>

                  </div>

                  {/* Style */}

                  <div>

                    <label className="text-white text-sm mb-2 block">

                      👨‍👩‍👧 Travel Style

                    </label>

                    <select
                      {...register("travelStyle")}
                      className="
                        w-full
                        bg-white/10
                        border
                        border-white/20
                        rounded-xl
                        px-5
                        py-4
                        text-white
                      "
                    >
                      <option className="text-black" value="Solo">Solo</option>

                      <option className="text-black" value="Friends">Friends</option>

                      <option className="text-black" value="Family">Family</option>

                      <option className="text-black" value="Couple">Couple</option>

                    </select>

                  </div>
                </div>

                <div className="flex justify-center mt-10">

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      px-14
                      py-4
                      rounded-full
                      bg-white/15
                      backdrop-blur-xl
                      border
                      border-white/20
                      text-white
                      text-lg
                      font-semibold
                      hover:bg-white/25
                      hover:scale-105
                      transition
                      duration-300
                    "
                  >
                    {loading
                      ? "Generating..."
                      : "✨ Generate AI Trip"}

                  </button>

                </div>

              </form>

            </>

          )}
      

          {trip && (

            <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-in">

              <div className="space-y-10">

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-white/20
                    shadow-2xl
                  "
                >

                    <img
                        src={image}
                        alt={trip.destination}
                        className="w-full h-[300px] md:h-[450px] object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/35">

                    {/* Hero Text */}

                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                          <span
                              className="
                                  bg-white/10
                                  backdrop-blur-xl
                                  border
                                  border-white/20
                                  px-5
                                  py-2
                                  rounded-full
                                  text-white
                                  mb-6
                              "
                          >
                              ✈️ AI Generated Itinerary
                          </span>

                          <h1 className="text-white text-5xl md:text-7xl font-bold">

                              {trip.destination}

                          </h1>

                          <p className="text-white/90 mt-5 text-lg max-w-2xl">

                              Your personalized journey is ready.

                              Explore destinations,

                              activities,

                              hotels,

                              and travel tips.

                          </p>

                      </div>

                    </div>

                </div>
          
                <div
                    className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[30px]
                        p-8
                    "
                >

                    <TripHeader trip={trip} />

                </div>

                <div
                    className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[30px]
                        p-8
                    "
                >

                    <WeatherCard weather={weather} />

                </div>

                {/* <div
                    className="
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        rounded-[30px]
                        p-8
                    "
                > */}

                   {Array.isArray(trip.days) &&
                      trip.days.map((day) => (
                        <DayCard
                          key={day.day}
                          day={day}
                        />
                    ))}

                {/* </div> */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

                  {/* Left */}
                  <button
                    onClick={() => generateTripPDF(trip)}
                    className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                  >
                    📄 Download PDF
                  </button>

                  {/* Right */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                    <button
                      onClick={saveTrip}
                      className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                    >
                      💾 Save Trip
                    </button>

                    <button
                      onClick={() => setShowShare(true)}
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                    >
                      📤 Share Trip
                    </button>

                  </div>

                </div>

                {Array.isArray(trip.travelTips) && (
                  <TravelTips tips={trip.travelTips} />
                )}

              </div>

            </div>
          )}
        </div>
      
      

      {showShare && (
        <ShareTripModal
          trip={trip}
          onClose={() => setShowShare(false)}
        />
      )}
      </div>
    </div>
  );
}

export default Planner;



