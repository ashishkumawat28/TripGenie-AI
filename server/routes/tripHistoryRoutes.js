import express from "express";

import { getTripCount } from "../controllers/tripHistoryController.js";
import { saveTrip } from "../controllers/tripHistoryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getAllTrips } from "../controllers/tripHistoryController.js";
import { getTripById } from "../controllers/tripHistoryController.js";
import { deleteTrip } from "../controllers/tripHistoryController.js";
import { updateTripStatus } from "../controllers/tripHistoryController.js";

const router = express.Router();

router.post("/save", protect, saveTrip);
router.get("/", protect, getAllTrips);
router.get("/count", protect, getTripCount);

router.get("/:id", protect, getTripById);
router.delete("/:id", protect, deleteTrip);

router.patch(
  "/status/:id",
  protect,
  updateTripStatus
);

export default router;
