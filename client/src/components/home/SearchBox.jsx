import { motion } from "framer-motion";

function SearchBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] lg:w-[70%]"
    >
      <div className="backdrop-blur-xl bg-white/20 rounded-2xl shadow-2xl p-6 border border-white/30">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Destination"
            className="bg-white rounded-xl p-4 outline-none"
          />

          <input
            type="number"
            placeholder="Budget"
            className="bg-white rounded-xl p-4 outline-none"
          />

          <input
            type="number"
            placeholder="Days"
            className="bg-white rounded-xl p-4 outline-none"
          />

          <button
            className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Generate Trip
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default SearchBox;