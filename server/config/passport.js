import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import User from "../models/user.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(
            new Error("Google account email not available"),
            null
          );
        }

        // Check whether user already exists
        let user = await User.findOne({ email });

        // Existing user
        if (user) {
          return done(null, user);
        }

        // New user
        user = await User.create({
          name: profile.displayName,
          email,
          profileImage: profile.photos?.[0]?.value || "",
          password: "",
        });

        return done(null, user);

      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;