import express from "express";
import { generateTripPlan } from "../controllers/tripController.js";

const router = express.Router();

router.post("/generate", generateTripPlan);

export default router;