import { useEffect, useState } from "react";
import tripAPI from "../../api/tripApi";
import toast from "react-hot-toast";

function Profile() {
  const [user, setUser] = useState(null);
  const [tripCount, setTripCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const profileRes = await tripAPI.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countRes = await tripAPI.get("/history/count", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(profileRes.data.user);
      setTripCount(countRes.data.count);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load profile"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex justify-center items-center p-8">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mt-6">
          {user.name}
        </h1>

        <p className="text-center text-gray-500 mt-2">
          {user.email}
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
            <span className="font-semibold">
              🧳 Total Trips
            </span>

            <span className="font-bold">
              {tripCount}
            </span>
          </div>

          <div className="flex justify-between bg-green-50 p-4 rounded-xl">
            <span className="font-semibold">
              📅 Member Since
            </span>

            <span className="font-bold">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;