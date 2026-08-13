import { generateTrip } from "../services/geminiService.js";

export const generateTripPlan = async (req, res) => {
  try {
    const { destination, days, budget, travelStyle } = req.body;

    const prompt = `
        You are an expert travel planner.

        Create a ${days}-day trip for:

        Destination: ${destination}
        Budget: ${budget}
        Travel Style: ${travelStyle}

        Return ONLY valid JSON.

        Use this exact format:

        {
        "tripTitle": "",
        "travelStyle",
        "destination": "",
        "days": [
            {
            "day": 1,
            "title": "",
            "places": [],
            "food": [],
            "hotel": "",
            "estimatedCost": ""
            }
        ],
        "totalBudget": "",
        "travelTips": []
        }

        Do not write explanations.
        Do not use markdown.
        Do not use \`\`\`json.
        Return only pure JSON.
    `;

    const trip = await generateTrip(prompt);

    res.status(200).json({
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