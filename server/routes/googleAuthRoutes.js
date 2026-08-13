import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();


// Start Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);


// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),

  (req, res) => {

    try {

      const token = jwt.sign(
        {
          id: req.user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );


      const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        profileImage: req.user.profileImage || "",
      };


      const userData = encodeURIComponent(
        JSON.stringify(user)
      );


      res.redirect(
        `http://localhost:5173/google-success?token=${token}&user=${userData}`
      );


    } catch (error) {

      console.error(
        "Google authentication error:",
        error
      );

      res.redirect(
        "http://localhost:5173/login?error=google-auth-failed"
      );

    }

  }
);

export default router;