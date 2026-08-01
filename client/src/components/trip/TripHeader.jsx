import { MapPin, Wallet, Plane } from "lucide-react";

function TripHeader({ trip }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl text-white p-8 mb-8">

      <div className="flex items-center gap-3 mb-4">
        <Plane size={34} />
        <h1 className="text-4xl font-bold">{trip.tripTitle}</h1>
      </div>

      <div className="flex flex-wrap gap-8 mt-6">

        <div className="flex items-center gap-2">
          <MapPin />
          <span className="text-lg">{trip.destination}</span>
        </div>

        <div className="flex items-center gap-2">
          <Wallet />
          <span className="text-lg">{trip.totalBudget}</span>
        </div>

      </div>

    </div>
  );
}

export default TripHeader;