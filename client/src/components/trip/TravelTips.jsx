import { Lightbulb } from "lucide-react";

function TravelTips({ tips }) {
  return (
    <div className="bg-yellow-50 rounded-3xl shadow-xl p-8 mb-10">

      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-yellow-500" size={30} />
        <h2 className="text-3xl font-bold">
          Travel Tips
        </h2>
      </div>

      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="bg-white  rounded-xl p-4 shadow"
          >
            ✅ {tip}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TravelTips;