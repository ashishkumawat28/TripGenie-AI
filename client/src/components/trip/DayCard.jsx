import {
  MapPin,
  Hotel,
  Utensils,
  Wallet,
  MapPinned,
} from "lucide-react";

function DayCard({ day, destination }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl transition duration-300">

      <h2 className="text-3xl font-bold text-blue-700 mb-2">
        📅 Day {day.day}
      </h2>

      <p className="text-xl font-semibold text-gray-700 mb-6">
        {day.title}
      </p>

      {/* Places */}

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-red-500" />
          <h3 className="font-bold text-lg">
            Places to Visit
          </h3>
        </div>

        <div className="space-y-4 ml-8">
          {day.places.map((place, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-3 mb-3"
            >
              <p className="font-medium">
                • {place}
              </p>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  `${place}, ${destination}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-800 hover:underline"
              >
                <MapPinned size={18} />
                Open in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Food */}

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Utensils className="text-orange-500" />
          <h3 className="font-bold text-lg">
            Food
          </h3>
        </div>

        <ul className="space-y-2 ml-8">
          {day.food.map((food, index) => (
            <li key={index}>• {food}</li>
          ))}
        </ul>
      </div>

      {/* Bottom Cards */}

      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-3">
          <Hotel className="text-blue-600" />
          <div>
            <p className="font-semibold">
              Hotel
            </p>

            <p>{day.hotel}</p>
          </div>
        </div>

        <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
          <Wallet className="text-green-600" />
          <div>
            <p className="font-semibold">
              Estimated Cost
            </p>

            <p>{day.estimatedCost}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DayCard;