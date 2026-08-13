
import "dotenv/config";

import express from "express";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";
import googleAuthRoutes from "./routes/googleAuthRoutes.js";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import tripHistoryRoutes from "./routes/tripHistoryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();

// Connect Database
await connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://voyaraai.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trip", tripRoutes);
app.use("/api/history", tripHistoryRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/auth", googleAuthRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("voyara API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    "Cloudinary configured:",
    !!process.env.CLOUDINARY_NAME &&
    !!process.env.CLOUDINARY_KEY &&
    !!process.env.CLOUDINARY_SECRET
  );
});