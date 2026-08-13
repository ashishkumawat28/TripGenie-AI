
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
      (trip.tripTitle || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      (trip.destination || "")
        .toLowerCase()
        .includes(search.toLowerCase());

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


  const toggleStatus = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const res = await API.patch(
      `/history/status/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTrips((prev) =>
      prev.map((trip) =>
        trip._id === id ? res.data.trip : trip
      )
    );

    toast.success("Trip status updated");
  } catch (error) {
    toast.error("Failed to update status");
  }
};

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/src/assets/planner/planner-bg.jpg")`,
      }}
    >

      {/* Overlay */}

      <div className="min-h-screen bg-black/55">

        <div className="max-w-7xl mx-auto pt-20 sm:pt-35">



          <div className="text-center mb-14">

            <span
              className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-white
                text-sm
              "
            >
              ✈️ Your Travel Collection
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-normal font-bold text-white mt-8">

              My

              <span className="block italic text-[#f0df9a]">
                Trips
              </span>

            </h1>

            <p className="text-white/80 italic text-lg mt-6 max-w-3xl mx-auto leading-8">

              Organize every journey,
              revisit your favorite adventures,
              and track upcoming trips with
              voyara AI.

            </p>

          </div>




          <div
            className="
              max-w-6xl
              mx-auto
              mb-16
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/20
              rounded-full
              px-5
              py-5
              shadow-2xl
            "
          >

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              {/* Search */}

              <input
                type="text"
                placeholder="🔍 Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  bg-transparent
                  border
                  border-white/10
                  rounded-full
                  px-6
                  py-4
                  text-white
                  placeholder:text-white/60
                  outline-none
                "
              />

              {/* Travel Style */}

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="
                  bg-transparent
                  border
                  border-white/10
                  rounded-full
                  px-6
                  py-4
                  text-white
                  outline-none
                "
              >
                <option className="text-black">All</option>
                <option className="text-black">Solo</option>
                <option className="text-black">Friends</option>
                <option className="text-black">Family</option>
                <option className="text-black">Couple</option>
              </select>

              {/* Sort */}

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                  bg-transparent
                  border
                  border-white/10
                  rounded-full
                  px-6
                  py-4
                  text-white
                  outline-none
                "
              >
                <option className="text-black">Newest</option>
                <option className="text-black">Oldest</option>
                <option className="text-black">Budget</option>
                <option className="text-black">Days</option>
              </select>

              {/* Search Button */}

              <button
                className="
                  rounded-full
                  bg-white/15
                  backdrop-blur-xl
                  border
                  border-white/20
                  text-white
                  font-semibold
                  hover:bg-white/20
                  transition
                "
              >
                Search
              </button>

            </div>

          </div>




          {trips.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">

              <div className="text-8xl mb-6">
                🧳
              </div>

              <h2 className="text-3xl font-serif font-normal text-[#f0df9a] font-bold">
                No Trips Yet
              </h2>

              <p className="text-gray-500 italic mt-3 text-lg text-center">
                Generate your first AI-powered itinerary and
                start exploring the world.
              </p>

              <button
                onClick={() => navigate("/planner")}
                className="mt-8 bg-[#d9b438] text-[#0a0f18] italic duration-300 hover:bg-[#ead05b] hover:-translate-y-1 px-8 py-4 rounded-xl font-semibold shadow-lg transition"
              >
                ✨ Generate Your First Trip
              </button>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredTrips.map((trip) => (
                <div
                  key={trip._id}
                  className="
                      group
                      relative
                      overflow-hidden
                      rounded-[30px]
                      bg-white/10
                      backdrop-blur-xl
                      border
                      border-white/20
                      shadow-2xl
                      hover:border-cyan-400/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
                      transition-all
                      duration-500
                  "
              >

                  {/* Trip Image */}

                  <div className="relative h-60 overflow-hidden">

                      <img
                          src={`https://source.unsplash.com/800x600/?${encodeURIComponent(
                              trip.destination
                          )}`}
                          alt={trip.destination}
                          className="
                              w-full
                              h-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-110
                          "
                      />

                      {/* Overlay */}

                      <div className="absolute inset-0 bg-black/40">

                      {/* Status */}

                      
                        <div
                          className={`absolute italic top-5 right-5 px-4 py-2 rounded-full backdrop-blur-xl border text-sm font-semibold ${
                            trip.tripStatus === "Completed"
                              ? "bg-green-500/20 border-green-400/30 text-green-300"
                              : "bg-yellow-500/20 border-yellow-300/30 text-yellow-200"
                          }`}
                        >
                          {trip.tripStatus === "Completed"
                            ? "🟢 Completed"
                            : "🟡 Pending"}
                          
                        </div>

                      </div>

                      {/* Title */}

                      <div className="absolute bottom-6 left-6">

                          <h2 className="text-3xl font-serif font-normal font-bold text-white">

                              {trip.tripTitle}

                          </h2>

                          <p className="text-white/80 italic mt-2">

                              📍 {trip.destination}

                          </p>

                      </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                      <div className="grid grid-cols-2 gap-4">

                          <div
                              className="
                                  bg-white/10
                                  backdrop-blur-xl
                                  rounded-2xl
                                  border
                                  border-white/10
                                  italic
                                  p-4
                              "
                          >

                              <p className="text-white/60 text-sm">

                                  Budget

                              </p>

                              <h3 className="text-white font-bold mt-2">

                                  💰 {trip.totalBudget}

                              </h3>

                          </div>

                          <div
                              className="
                                  bg-white/10
                                  backdrop-blur-xl
                                  rounded-2xl
                                  border
                                  border-white/10
                                  italic
                                  p-4
                              "
                          >

                              <p className="text-white/60 text-sm">

                                  Duration

                              </p>

                              <h3 className="text-white font-bold mt-2">

                                  📅 {trip.days.length} Days

                              </h3>

                          </div>

                      </div>

                      <div
                          className="
                              mt-5
                              bg-white/10
                              rounded-2xl
                              backdrop-blur-xl
                              border
                              border-white/10
                              italic
                              p-4
                          "
                      >

                          <p className="text-white/60 text-sm">

                              Travel Style

                          </p>

                          <h3 className="text-white font-bold mt-2">

                              👨‍👩‍👧 {trip.travelStyle}

                          </h3>

                      </div>

                      {/* Buttons */}

                      <div className="flex gap-4 mt-6">

                          <button
                              onClick={() => navigate(`/trip/${trip._id}`)}
                              className="
                                  flex-1
                                  py-3
                                  rounded-xl
                                  bg-cyan-500
                                  hover:bg-cyan-600
                                  text-white
                                  font-semibold
                                  transition
                                  italic
                              "
                          >
                              👁 View
                          </button>

                          <button
                              onClick={() => deleteTrip(trip._id)}
                              className="
                                  flex-1
                                  py-3
                                  rounded-xl
                                  bg-red-500
                                  hover:bg-red-600
                                  text-white
                                  font-semibold
                                  transition
                                  italic
                              "
                          >
                              🗑 Delete
                          </button>

                      </div>

                      {/* Status Button */}

                      <button
                        onClick={() => toggleStatus(trip._id)}
                        className={`w-full font-serif font-normal mt-5 py-3 rounded-xl backdrop-blur-xl border font-semibold transition ${
                          trip.tripStatus === "Completed"
                            ? "bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30"
                            : "bg-yellow-500/20 border-yellow-300/30 text-yellow-200 hover:bg-yellow-500/30"
                        }`}
                      >
                        {trip.tripStatus === "Completed"
                          ? "🟢 Mark as Pending"
                          : "🟡 Mark as Completed"}
                      </button>

                  </div>

              </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>


  );
}

export default Trips;