import express from "express";
import { fetchWeather } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/:city", fetchWeather);

export default router;