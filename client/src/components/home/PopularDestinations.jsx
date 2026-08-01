import DestinationCard from "../ui/DestinationCard";

function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Goa",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    },
    {
      id: 3,
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center">
        Popular Destinations
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            name={destination.name}
            country={destination.country}
            image={destination.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;