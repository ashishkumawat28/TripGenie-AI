// function DestinationCard({ name, country, image }) {
//   return (
//     <div className="bg-white  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

//       <img
//         src={image}
//         alt={name}
//         className="w-full h-56 object-cover"
//       />

//       <div className="p-5">
//         <h2 className="text-2xl font-bold">{name}</h2>

//         <p className="text-gray-600 mt-2">
//           {country}
//         </p>
//       </div>

//     </div>
//   );
// }

// export default DestinationCard;





import { ArrowUpRight, MapPin } from "lucide-react";

function DestinationCard({ name, country, image }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/10
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72">

        <img
          src={image}
          alt={name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Floating Arrow */}
        <div
          className="
            absolute
            top-5
            right-5
            w-12
            h-12
            rounded-full
            bg-white/20
            backdrop-blur-xl
            flex
            items-center
            justify-center
            text-white
            border
            border-white/20
            opacity-0
            group-hover:opacity-100
            group-hover:rotate-45
            transition-all
            duration-500
          "
        >
          <ArrowUpRight size={22} />
        </div>

        {/* Destination Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">

          <h2 className="text-3xl font-bold text-white">
            {name}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-200">

            <MapPin size={18} />

            <p>{country}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;