
import {
  MapPin,
  Hotel,
  Utensils,
  Wallet,
  MapPinned,
} from "lucide-react";

function DayCard({ day, destination }) {
  return (
    <div
      className="
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-[30px]
        shadow-2xl
        p-8
        mb-10
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
      "
    >

      {/* Top */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">

        <div>

          <h2 className="text-4xl font-serif font-bold text-white">

            📅 Day {day.day}

          </h2>

          <p className="text-cyan-300 text-xl mt-2">

            {day.title}

          </p>

        </div>

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-2xl
            px-6
            py-4
          "
        >

          <p className="text-white/70 text-sm">

            Estimated Cost

          </p>

          <p className="text-2xl font-bold text-cyan-300">

            {day.estimatedCost}

          </p>

        </div>

      </div>

      {/* Places */}

      <div className="mt-10">

        <div className="flex items-center gap-3 mb-5">

          <MapPin className="text-red-400" />

          <h3 className="text-2xl font-semibold text-white">

            Places to Visit

          </h3>

        </div>

        <div className="space-y-4">

          {day.places.map((place, index) => (

            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                p-5
              "
            >

              <p className="text-white text-lg">

                {place}

              </p>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  `${place}, ${destination}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-cyan-300 hover:text-cyan-200"
              >
                <MapPinned size={18} />

                Open in Google Maps

              </a>

            </div>

          ))}

        </div>

      </div>

      {/* Food */}

      <div className="mt-10">

        <div className="flex items-center gap-3 mb-5">

          <Utensils className="text-orange-400" />

          <h3 className="text-2xl font-semibold text-white">

            Recommended Food

          </h3>

        </div>

        <div className="flex flex-wrap gap-4">

          {day.food.map((food, index) => (

            <span
              key={index}
              className="
                px-5
                py-3
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-white
              "
            >
              🍴 {food}
            </span>

          ))}

        </div>

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-2xl
            p-6
            flex
            items-center
            gap-4
          "
        >

          <Hotel className="text-cyan-300" size={32} />

          <div>

            <p className="text-white/70">

              Hotel

            </p>

            <p className="text-white font-semibold">

              {day.hotel}

            </p>

          </div>

        </div>

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-2xl
            p-6
            flex
            items-center
            gap-4
          "
        >

          <Wallet className="text-green-400" size={32} />

          <div>

            <p className="text-white/70">

              Budget

            </p>

            <p className="text-white font-semibold">

              {day.estimatedCost}

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DayCard;