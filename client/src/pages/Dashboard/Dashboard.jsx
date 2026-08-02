import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tripAPI from "../../api/tripApi";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState({
    totalTrips: 0,
    recentTrips: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await tripAPI.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDashboard(res.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        👋 Welcome Back
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-gray-500">
            Total Trips
          </h2>

          <p className="text-5xl font-bold mt-3 text-blue-600">
            {dashboard.totalTrips}
          </p>
        </div>

        <div
          onClick={() => navigate("/planner")}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <h2 className="text-gray-500">
            AI Planner
          </h2>

          <p className="mt-4 font-semibold">
            Generate New Trip →
          </p>
        </div>

        <div
          onClick={() => navigate("/my-trips")}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <h2 className="text-gray-500">
            Saved Trips
          </h2>

          <p className="mt-4 font-semibold">
            View All →
          </p>
        </div>

      </div>

      {/* Recent Trips */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Trips
        </h2>

        {dashboard.recentTrips.length === 0 ? (
          <p>No trips yet.</p>
        ) : (
          dashboard.recentTrips.map((trip) => (
            <div
              key={trip._id}
              className="border-b py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">
                  {trip.tripTitle}
                </h3>

                <p className="text-gray-500">
                  {trip.destination}
                </p>
              </div>

              <button
                onClick={() => navigate(`/trip/${trip._id}`)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                View
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;