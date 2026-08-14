import DashboardBg from "../../assets/dashboard/dashboard-bg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Sparkles,
  MapPinned,
  Plane,
  BookOpen,
  Clock3,
  ArrowRight,
  Compass,
} from "lucide-react";

import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import API from "../../api/authApi";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to read user:", error);
      }
    }
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
        error.response?.data?.message ||
          "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  const userName =
    user?.name ||
    JSON.parse(localStorage.getItem("user") || "{}")?.name ||
    "Traveler";

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* =====================================================
          FIXED BACKGROUND
      ====================================================== */}

      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
             `url(${DashboardBg})`,
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/45" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="relative pt-20 sm:pt-24">

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="min-h-[calc(100vh-85px)] flex items-center justify-center px-4 sm:px-6 lg:px-7 py-10">

          <div
            className="
              w-full
              max-w-[1600px]
              min-h-[calc(100vh-125px)]
              rounded-[28px]
              sm:rounded-[36px]
              border
              border-white/20
              bg-black/10
              flex
              items-center
              justify-center
              text-center
              px-5
              sm:px-10
              py-16
            "
          >

            <div className="max-w-5xl">

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  text-white
                  text-sm
                  sm:text-base
                  font-medium
                "
              >
                <Sparkles
                  size={17}
                  className="text-yellow-300"
                />

                Smart AI Travel Planner
              </div>


              {/* Welcome */}

              <h1
                className="
                  font-serif
                  font-normal
                  mt-8
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  font-extrabold
                  tracking-tight
                  leading-none
                  drop-shadow-2xl
                "
              >
                Welcome
              </h1>


              {/* User Name */}

              <h2
                className="
                  mt-4
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-extrabold
                  font-serif
                  font-normal
                  text-[#f0df9a]
                  break-words
                "
              >
                {userName}
              </h2>


              {/* Description */}

              <p
                className="
                  mt-8
                  mx-auto
                  max-w-4xl
                  text-base
                  sm:text-lg
                  md:text-xl
                  lg:text-2xl
                  leading-7
                  italic
                  sm:leading-9
                  text-white/90
                  drop-shadow-lg
                "
              >
                Plan unforgettable journeys with Voyara.
                Generate personalized itineraries, discover amazing
                destinations, save your favorite trips, and manage
                every adventure from one place.
              </p>


              {/* Buttons */}

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  gap-4
                  sm:gap-5
                "
              >

                <button
                  onClick={() => navigate("/planner")}
                  className="
                    group
                    w-full
                    sm:w-auto
                    min-w-[210px]
                    px-7
                    py-4
                    rounded-2xl
                    bg-white/15
                    backdrop-blur-xl
                    border
                    border-white/25
                    shadow-xl
                    hover:bg-white/25
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    font-semibold
                    text-lg
                  "
                >

                  <span className="flex items-center justify-center gap-3">

                    <Sparkles
                      size={21}
                      className="text-yellow-300"
                    />

                    Plan New Trip

                    <ArrowRight
                      size={19}
                      className="
                        opacity-0
                        -translate-x-2
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                      "
                    />

                  </span>

                </button>


                <button
                  onClick={() => navigate("/trips")}
                  className="
                    w-full
                    sm:w-auto
                    min-w-[210px]
                    px-7
                    py-4
                    rounded-2xl
                    bg-white/15
                    backdrop-blur-xl
                    border
                    border-white/25
                    shadow-xl
                    hover:bg-white/25
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    font-semibold
                    text-lg
                  "
                >

                  <span className="flex items-center justify-center gap-3">

                    <BookOpen
                      size={21}
                      className="text-cyan-300"
                    />

                    My Trips

                  </span>

                </button>

              </div>


              {/* Scroll Indicator */}

              <div
                className="
                  mt-16
                  flex
                  flex-col
                  items-center
                  text-white/60
                  animate-bounce
                "
              >

                <span className="text-xs uppercase tracking-[0.3em]">
                  Explore
                </span>

                <span className="mt-2">
                  ↓
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            STATS SECTION
        ==================================================== */}

        <section className="px-4 sm:px-6 lg:px-10 pb-20">

          <div className="max-w-7xl mx-auto">

            <div className="mb-10">

              <div className="flex items-center gap-3">

                <Compass
                  size={28}
                  className="text-cyan-300"
                />

                <h2 className="text-3xl font-serif font-normal sm:text-4xl font-extrabold">
                  Your Journey
                </h2>

              </div>

              <p className="text-white/70 italic mt-2">
                Everything about your travel journey in one place.
              </p>

            </div>


            {/* Stats */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-5
              "
            >

              {/* Total Trips */}

              <div
                className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  p-7
                  shadow-2xl
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <p className="font-serif text-white/65">
                      Total Trips
                    </p>

                    <h3 className="text-4xl font-bold mt-3">
                      {stats?.totalTrips || 0}
                    </h3>

                  </div>

                  <div className="p-3 rounded-2xl bg-white/10">
                    <Plane
                      size={25}
                      className="text-cyan-300"
                    />
                  </div>

                </div>

              </div>


              {/* Destinations */}

              <div
                className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  p-7
                  shadow-2xl
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-white/65 font-serif">
                      Destinations
                    </p>

                    <h3 className="text-4xl font-bold mt-3">
                      {stats?.totalDestinations || 0}
                    </h3>

                  </div>

                  <div className="p-3 rounded-2xl bg-white/10">
                    <MapPinned
                      size={25}
                      className="text-green-300"
                    />
                  </div>

                </div>

              </div>


              {/* AI Planner */}

              <div
                className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  p-7
                  shadow-2xl
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-white/65 font-serif">
                      AI Planner
                    </p>

                    <h3 className="text-2xl font-bold mt-4 italic text-cyan-300">
                      Ready
                    </h3>

                  </div>

                  <div className="p-3 rounded-2xl bg-white/10">
                    <Sparkles
                      size={25}
                      className="text-yellow-300"
                    />
                  </div>

                </div>

              </div>


              {/* Latest */}

              <div
                className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  p-7
                  shadow-2xl
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-white/65 font-serif">
                      Latest Trip
                    </p>

                    <h3 className="text-xl font-bold mt-4 truncate max-w-[180px]">
                      {stats?.latestTrip?.destination ||
                        "No trips yet"}
                    </h3>

                  </div>

                  <div className="p-3 rounded-2xl bg-white/10">
                    <Clock3
                      size={25}
                      className="text-pink-300"
                    />
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RECENT TRIP
            ================================================== */}

            {stats?.latestTrip && (

              <div className="mt-12">

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h2 className="text-3xl font-serif sm:text-4xl font-extrabold font-normal">
                      Recent Trip
                    </h2>

                    <p className="text-white/65 italic mt-2">
                      Continue exploring your latest adventure.
                    </p>

                  </div>

                  <button
                    onClick={() => navigate("/trips")}
                    className="
                      hidden
                      sm:flex
                      items-center
                      gap-2
                      text-cyan-300
                      hover:text-white
                      transition
                      italic
                    "
                  >
                    View All
                    <ArrowRight size={18} />
                  </button>

                </div>


                <div
                  className="
                    rounded-[30px]
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    shadow-2xl
                    p-6
                    sm:p-8
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-6
                    "
                  >

                    <div>

                      <span
                        className="
                          inline-flex
                          px-4
                          py-1.5
                          rounded-full
                          bg-white/10
                          border
                          border-white/15
                          text-sm
                          text-cyan-200
                        "
                      >
                        ✈️ Recent Adventure
                      </span>


                      <h3 className="text-3xl font-bold mt-4">
                        {stats.latestTrip.tripTitle}
                      </h3>


                      <p className="text-white/75 mt-3 text-lg">
                        📍 {stats.latestTrip.destination}
                      </p>


                      <p className="text-white/55 mt-2">
                        📅{" "}
                        {new Date(
                          stats.latestTrip.createdAt
                        ).toLocaleDateString()}
                      </p>

                    </div>


                    <button
                      onClick={() =>
                        navigate(
                          `/tripDetails/${stats.latestTrip._id}`
                        )
                      }
                      className="
                        w-full
                        lg:w-auto
                        px-7
                        py-3.5
                        rounded-xl
                        bg-white/15
                        backdrop-blur-xl
                        border
                        border-white/20
                        hover:bg-white/25
                        transition
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        italic
                      "
                    >
                      View Trip
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </div>

            )}


            {/* Mobile View All */}

            <button
              onClick={() => navigate("/trips")}
              className="
                sm:hidden
                w-full
                mt-6
                py-3
                rounded-xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-cyan-300
                font-semibold
              "
            >
              View All Trips
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}
export default Dashboard;