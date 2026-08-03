import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import LoadingSkeleton from "../../components/common/LoadingSkeleton";

import API from "../../api/authApi";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data.stats);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 p-8">

      {/* Welcome */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold text-blue-700">
          👋 Welcome Back
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Plan your next adventure with TripGenie AI.
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-4xl mb-3">🧳</h2>

          <p className="text-gray-500">
            Total Trips
          </p>

          <h3 className="text-4xl font-bold text-blue-700 mt-2">
            {stats?.totalTrips || 0}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-4xl mb-3">🌍</h2>

          <p className="text-gray-500">
            Destinations
          </p>

          <h3 className="text-4xl font-bold text-green-600 mt-2">
            {stats?.totalDestinations || 0}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-4xl mb-3">🤖</h2>

          <p className="text-gray-500">
            AI Planner
          </p>

          <h3 className="text-2xl font-bold text-purple-600 mt-2">
            Ready
          </h3>
        </div>

      </div>

      {/* Quick Actions */}

      <h2 className="text-3xl font-bold mt-12 mb-6">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div
          onClick={() => navigate("/planner")}
          className="cursor-pointer bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
        >
          <h2 className="text-4xl mb-4">
            ✨
          </h2>

          <h3 className="text-xl font-bold">
            Generate Trip
          </h3>

          <p className="text-gray-500 mt-2">
            Create a new AI itinerary.
          </p>
        </div>

        <div
          onClick={() => navigate("/trips")}
          className="cursor-pointer bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
        >
          <h2 className="text-4xl mb-4">
            📚
          </h2>

          <h3 className="text-xl font-bold">
            My Trips
          </h3>

          <p className="text-gray-500 mt-2">
            View your saved trips.
          </p>
        </div>

        <div
          onClick={() => navigate("/profile")}
          className="cursor-pointer bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition"
        >
          <h2 className="text-4xl mb-4">
            👤
          </h2>

          <h3 className="text-xl font-bold">
            Profile
          </h3>

          <p className="text-gray-500 mt-2">
            Manage your account.
          </p>
        </div>

      </div>

      {/* Recent Trip */}

      {stats?.latestTrip && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">

          <h2 className="text-3xl font-bold mb-6">
            🕒 Recent Trip
          </h2>

          <h3 className="text-2xl font-semibold">
            {stats.latestTrip.tripTitle}
          </h3>

          <p className="text-gray-500 mt-3">
            📍 {stats.latestTrip.destination}
          </p>

          <p className="text-gray-500 mt-2">
            📅{" "}
            {new Date(
              stats.latestTrip.createdAt
            ).toLocaleDateString()}
          </p>

          <button
            onClick={() =>
              navigate(`/tripDetails/${stats.latestTrip._id}`)
            }
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            View Trip
          </button>

        </div>
      )}

    </div>
  );
}

export default Dashboard;