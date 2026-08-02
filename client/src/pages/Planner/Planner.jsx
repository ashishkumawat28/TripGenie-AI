import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import WeatherCard from "../../components/trip/WeatherCard";


import tripAPI from "../../api/tripApi";

import TripHeader from "../../components/trip/TripHeader";
import DayCard from "../../components/trip/DayCard";
import TravelTips from "../../components/trip/TravelTips";

function Planner() {
  const { register, handleSubmit, reset } = useForm();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await tripAPI.post("/trip/generate", data);

      console.log("API Response:", res.data);

      setTrip(res.data.trip);

      const weatherRes = await tripAPI.get(
        `/weather/${encodeURIComponent(res.data.trip.destination)}`
      );

      setWeather(weatherRes.data.weather);

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

      await tripAPI.post(
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex flex-col items-center py-10 px-4">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg"
      >
        <h1 className="text-5xl font-extrabold text-center text-blue-700">
            ✈️ TripGenie AI
        </h1>

        <p className="text-gray-500 text-center mt-3 mb-8">
            Plan your perfect vacation with TripGenie
        </p>

        <input
          {...register("destination")}
          placeholder="Destination"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none mt-2 mb-2 focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <input
          type="number"
          {...register("days")}
          placeholder="Days"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none mt-2 mb-2 focus:ring-2 focus:ring-blue-500 transition"
          required
        />

        <select
          {...register("budget")}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none mt-2 mb-2 focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Luxury">Luxury</option>
        </select>

        <select
          {...register("travelStyle")}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none mt-2 mb-2 focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="Solo">Solo</option>
          <option value="Friends">Friends</option>
          <option value="Family">Family</option>
          <option value="Couple">Couple</option>
        </select>

        <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300 mt-2 mb-2 shadow-lg"
        >
            {loading ? "Generating..." : "✨ Generate AI Trip"}
        </button>
      </form>

      {trip && (
        <div className="w-full max-w-5xl mt-10">

          <TripHeader trip={trip} />

          <WeatherCard weather={weather} />
          {Array.isArray(trip.days) &&
            trip.days.map((day) => (
              <DayCard
                key={day.day}
                day={day}
              />
            ))}

            <div className="flex justify-end mb-6">
              <button
                onClick={saveTrip}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
              >
                💾 Save Trip
              </button>
            </div>

          {Array.isArray(trip.travelTips) && (
            <TravelTips tips={trip.travelTips} />
          )}

        </div>
      )}
    </div>
  );
}

export default Planner;