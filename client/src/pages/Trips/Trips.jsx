import { useEffect, useState } from "react";
import tripAPI from "../../api/tripApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await tripAPI.get("/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTrips(res.data.trips);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load trips"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  const deleteTrip = async (id) => {
      try {
        const token = localStorage.getItem("token");

        await tripAPI.delete(`/history/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Remove the deleted trip from the UI
        setTrips((prevTrips) =>
          prevTrips.filter((trip) => trip._id !== id)
        );

        toast.success("Trip Deleted Successfully");
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to delete trip"
        );
      }
    };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        📚 My Trips
      </h1>

      {trips.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">

          <div className="text-8xl mb-6">
            🧳
          </div>

          <h2 className="text-3xl font-bold text-gray-700">
            No Trips Yet
          </h2>

          <p className="text-gray-500 mt-3 text-lg text-center">
            Generate your first AI-powered itinerary and
            start exploring the world.
          </p>

          <button
            onClick={() => navigate("/planner")}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
          >
            ✨ Generate Your First Trip
          </button>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {trips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2">
                {trip.tripTitle}
              </h2>

              <p>📍 {trip.destination}</p>

              <p className="mt-2">
                💰 {trip.totalBudget}
              </p>

              <p className="mt-2">
                📅 {trip.days.length} Days
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => navigate(`/trip/${trip._id}`)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition"
                >
                  👁 View
                </button>
                <button
                  onClick={() => deleteTrip(trip._id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-semibold transition"
                >
                  🗑 Delete
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Trips;