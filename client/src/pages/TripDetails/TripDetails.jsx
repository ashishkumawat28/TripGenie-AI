
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/authApi";
import toast from "react-hot-toast";

import LoadingSkeleton from "../../components/common/LoadingSkeleton";
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
      const tripRes = await API.get(`/history/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const tripData = tripRes.data.trip;

      setTrip(tripData);

      // Fetch Weather
      if (tripData?.destination) {
        const weatherRes = await API.get(
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
        <LoadingSkeleton />
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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          `url("/src/assets/planner/planner-bg.jpg")`,
      }}
    >

      <div className="min-h-screen bg-black/55">

        <div className="max-w-7xl mx-auto px-6 py-16">





          <div className="space-y-10">  

            <div
                className=" 
                    mt-10
                    relative
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-white/20
                    shadow-2xl
                "
            >

                <img
                    src={`https://source.unsplash.com/1600x700/?${encodeURIComponent(
                        trip.destination
                    )}`}
                    alt={trip.destination}
                    className="
                        w-full
                        h-[300px]
                        md:h-[500px]
                        object-cover
                    "
                />

                <div className="absolute inset-0 bg-black/45">

                  <div
                      className="
                          absolute
                          inset-0
                          flex
                          flex-col
                          justify-center
                          items-center
                          text-center
                          px-6
                      "
                  >

                      <span
                          className="
                              bg-white/10
                              backdrop-blur-xl
                              border
                              border-white/20
                              rounded-full
                              px-6
                              py-2
                              text-white
                              mb-6
                          "
                      >

                          ✈️ AI Generated Trip

                      </span>

                      <h1
                          className="
                              text-5xl
                              md:text-7xl
                              font-bold
                              text-white
                              font-serif font-normal
                          "
                      >

                          {trip.destination}

                      </h1>

                      <p
                          className="
                              text-xl
                              text-white/90
                              mt-6
                              italic
                          "
                      >

                          {trip.days.length} Days

                          • {trip.travelStyle}

                          • ₹ {trip.totalBudget}

                      </p>

                      <p
                          className="
                              text-white/70
                              mt-6
                              max-w-2xl
                              leading-8
                              italic
                          "
                      >

                          Explore the best places,
                          restaurants,
                          attractions,
                          and unforgettable experiences
                          planned by Voyara AI.

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
                    font-serif font-normal
                "
            >

                <TripHeader trip={trip} />

            </div>



            <div
              className="
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/20
                rounded-[30px]
                p-8
                shadow-2xl
              "
            > 

              <div className="flex items-center gap-3 mb-6">

                <div className="text-4xl">
                  🌤️
                </div>

                <div>

                  <h2 className="text-3xl font-serif font-normal font-bold text-white">
                    Current Weather
                  </h2>

                  <p className="text-white/70 italic">
                    Live weather for your destination
                  </p>

                </div>

              </div>

              <WeatherCard weather={weather} />

            </div>



            <div className="text-center mt-16">

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
                📅 AI Generated Itinerary
              </span>

              <h2 className="text-5xl font-extrabold font-serif font-normal text-white mt-6">

                Day by Day Plan

              </h2>

              <p className="italic text-white/70 mt-5 max-w-2xl mx-auto">

                Follow this itinerary to make the most of your journey.

              </p>

            </div>




            <div className="relative mt-16">

                {/* Vertical Line */}

                <div
                  className="
                    hidden
                    md:block
                    absolute
                    left-8
                    top-0
                    bottom-0
                    w-1
                    bg-cyan-400/40
                    rounded-full
                  "
                />

                  <div className="space-y-12">

                      {trip.days?.map((day) => (
                          <div
                            key={day.day}
                            className="
                              relative
                              md:pl-24
                            "
                          >

                            {/* Timeline Circle */}

                            <div
                              className="
                                hidden
                                md:flex
                                absolute
                                left-2
                                top-12
                                w-12
                                h-12
                                rounded-full
                                bg-cyan-500
                                border-4
                                border-white
                                items-center
                                justify-center
                                text-white
                                font-bold
                                shadow-lg
                              "
                            >

                              {day.day}

                            </div>

                            <DayCard
                              day={day}
                              destination={trip.destination}
                            />

                          </div>
                      ))}
                

                  </div>

                </div>
              
                <div
                  className="
                    bg-white/10
                    backdrop-blur-2xl
                    border
                    border-white/20
                    rounded-[30px]
                    p-8
                    shadow-2xl
                  "
                >

                  <div className="flex items-center gap-3 mb-6">

                    <div className="text-4xl">
                      💡
                    </div>

                    <div>

                      <h2 className="text-3xl font-serif font-normal font-bold text-white">
                        Travel Tips
                      </h2>

                      <p className="text-white/70 italic ">

                        Helpful suggestions for your trip

                      </p>

                    </div>

                  </div>

                  <TravelTips tips={trip.travelTips || []} />

                </div>

            </div>

        </div>
      </div>
    </div>
  );
}

export default TripDetails;


