function DestinationImage({ image, destination }) {
  if (!image) return null;

  return (
    <div className="relative mb-8 rounded-3xl overflow-hidden shadow-xl">

      <img
        src={image}
        alt={destination}
        className="w-full h-96 object-cover"
      />

      <div className="absolute inset-0 bg-black/35 flex items-end">
        <h1 className="text-white text-4xl font-bold p-8">
          {destination}
        </h1>
      </div>

    </div>
  );
}

export default DestinationImage;