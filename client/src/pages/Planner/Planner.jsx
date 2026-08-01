
import { useState } from "react";
import tripAPI from "../../api/tripApi";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Planner() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await tripAPI.post("/trip/generate", data);

      setTrip(res.data.trip);

      toast.success("Trip Generated Successfully");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
};

const [trip, setTrip] = useState("");
const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-xl w-[450px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Trip Planner
        </h1>

        <input
          {...register("destination")}
          placeholder="Destination"
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="number"
          {...register("days")}
          placeholder="Days"
          className="border p-3 rounded w-full mb-4"
        />

        <select
          {...register("budget")}
          className="border p-3 rounded w-full mb-4"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Luxury</option>
        </select>

        <select
          {...register("travelStyle")}
          className="border p-3 rounded w-full mb-6"
        >
          <option>Solo</option>
          <option>Friends</option>
          <option>Family</option>
          <option>Couple</option>
        </select>

        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Trip"}
        </button>
      </form>

      {trip && (
        <div className="bg-white shadow-xl rounded-xl p-6 mt-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">
            AI Generated Trip
          </h2>

          <pre className="whitespace-pre-wrap text-gray-700">
            {trip}
          </pre>
        </div>
      )}
      
    </div>
  );
}

export default Planner;