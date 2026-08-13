import express from "express";
import {
  login,
  getProfile,
  sendOTP,
  verifyOTP,
  forgotPassword,
  verifyResetOTP,
  resetPassword,
  uploadProfileImage
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";



const router = express.Router();

router.post("/login", login);

router.post(
  "/profile/upload",
  protect,
  (req, res, next) => {

    upload.single("image")(req, res, (err) => {

      if (err) {

        console.error("================================");
        console.error("MULTER / CLOUDINARY UPLOAD ERROR");
        console.error("================================");

        console.error("Error:", err);

        console.error(
          "Error JSON:",
          JSON.stringify(
            err,
            Object.getOwnPropertyNames(err),
            2
          )
        );

        console.error(
          "Error message:",
          err.message
        );

        return res.status(500).json({
          success: false,
          message:
            err.message ||
            "Image upload failed",
        });
      }

      next();
    });

  },
  uploadProfileImage
);

router.post(
  "/forgot-password",
  forgotPassword
);


router.post(
  "/verify-reset-otp",
  verifyResetOTP
);


router.post(
  "/reset-password",
  resetPassword
);

router.post("/send-otp", sendOTP);

router.post("/verify-otp", verifyOTP);

router.get("/profile", protect, getProfile);

export default router;

