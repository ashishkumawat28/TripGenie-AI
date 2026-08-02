import Trip from "../models/tripModel.js";

export const getDashboardData = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(3);

    const totalTrips = await Trip.countDocuments({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      totalTrips,
      recentTrips: trips,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};