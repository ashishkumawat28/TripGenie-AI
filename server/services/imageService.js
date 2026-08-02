export const getDestinationImage = async (destination) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    destination
  )}&per_page=1&orientation=landscape&client_id=${
    process.env.UNSPLASH_ACCESS_KEY
  }`;

  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0] || "Failed to fetch image");
  }

  return (
    data.results[0]?.urls?.regular ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  );
};