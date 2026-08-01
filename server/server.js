import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("TripGenie API Running...");
});

const PORT = process.env.PORT || 5000;

await connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});