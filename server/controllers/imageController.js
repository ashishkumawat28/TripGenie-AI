import { getDestinationImage } from "../services/imageService.js";

export const fetchImage = async (req, res) => {
  try {
    const { destination } = req.params;

    const image = await getDestinationImage(destination);

    res.json({
      success: true,
      image,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};