function DestinationCard({ name, country, image }) {
  return (
    <div className="bg-white  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">{name}</h2>

        <p className="text-gray-600 mt-2">
          {country}
        </p>
      </div>

    </div>
  );
}

export default DestinationCard;