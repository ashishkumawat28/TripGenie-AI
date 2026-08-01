import Trip from "../models/tripModel.js";

export const saveTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};