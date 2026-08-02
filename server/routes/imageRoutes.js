import express from "express";
import { fetchImage } from "../controllers/imageController.js";

const router = express.Router();

router.get("/:destination", fetchImage);

export default router;