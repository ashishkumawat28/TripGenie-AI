import { useEffect, useState } from "react";
import API from "../../api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Newest");

  const navigate = useNavigate();

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/history", {
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
        <LoadingSkeleton />
      </div>
    );
  }

  const deleteTrip = async (id) => {
      try {
        const token = localStorage.getItem("token");

        await API.delete(`/history/${id}`, {
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

  let filteredTrips = [...trips];

  filteredTrips = filteredTrips.filter((trip) => {

    const matchesSearch =
      trip.destination.toLowerCase().includes(search.toLowerCase()) ||

      trip.tripTitle.toLowerCase().includes(search.toLowerCase()) ||

      trip.travelStyle.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
        filter === "All" ||
        trip.travelStyle === filter;

    return matchesSearch && matchesFilter;

  });

  if (sort === "Newest") {

    filteredTrips.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );

  }

  if (sort === "Oldest") {

      filteredTrips.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );

  }

  if (sort === "Budget") {

      filteredTrips.sort(
        (a, b) =>
          parseInt(a.totalBudget) -
          parseInt(b.totalBudget)
      );

  }

  if (sort === "Days") {

      filteredTrips.sort(
        (a, b) =>
          a.days.length -
          b.days.length
      );

  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        📚 My Trips
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="🔍 Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-4 rounded-xl border border-gray-300"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-4 rounded-xl border border-gray-300"
        >
          <option>All</option>
          <option>Solo</option>
          <option>Friends</option>
          <option>Family</option>
          <option>Couple</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-4 rounded-xl border border-gray-300"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Budget</option>
          <option>Days</option>
        </select>

      </div>

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

          {filteredTrips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white  rounded-2xl shadow-lg p-6"
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