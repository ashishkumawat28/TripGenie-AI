import Trip from "../models/tripModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Get all trips of logged-in user
    const trips = await Trip.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    const totalTrips = trips.length;

    // Count unique destinations
    const uniqueDestinations = [
      ...new Set(trips.map((trip) => trip.destination)),
    ];

    const totalDestinations = uniqueDestinations.length;

    // Latest trip
    const latestTrip = trips.length > 0 ? trips[0] : null;

    res.status(200).json({
      success: true,
      stats: {
        totalTrips,
        totalDestinations,
        latestTrip,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};