import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tripAPI from "../../api/tripApi";
import toast from "react-hot-toast";

import TripHeader from "../../components/trip/TripHeader";
import WeatherCard from "../../components/trip/WeatherCard";
import DayCard from "../../components/trip/DayCard";
import TravelTips from "../../components/trip/TravelTips";

function TripDetails() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrip();
  }, [id]);

  const fetchTrip = async () => {
    try {
      const token = localStorage.getItem("token");

      // Fetch Trip
      const tripRes = await tripAPI.get(`/history/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const tripData = tripRes.data.trip;

      setTrip(tripData);

      // Fetch Weather
      if (tripData?.destination) {
        const weatherRes = await tripAPI.get(
          `/weather/${encodeURIComponent(tripData.destination)}`
        );

        setWeather(weatherRes.data.weather);
      }

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to load trip"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Trip not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <TripHeader trip={trip} />

        <WeatherCard weather={weather} />

        {trip.days?.map((day) => (
          <DayCard
            key={day.day}
            day={day}
            destination={trip.destination}
          />
        ))}

        <TravelTips tips={trip.travelTips || []} />

      </div>

    </div>
  );
}

export default TripDetails;