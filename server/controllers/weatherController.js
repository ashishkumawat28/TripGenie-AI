import { getWeather } from "../services/weatherService.js";

export const fetchWeather = async (req, res) => {
  try {
    const { city } = req.params;

    const weather = await getWeather(city);

    res.status(200).json({
      success: true,
      weather,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};