import express from "express";
import { saveTrip } from "../controllers/tripHistoryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save", protect, saveTrip);

export default router;
