
import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTPEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"voyara AI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "voyara AI - Email Verification",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>✈️ Welcome to voyara AI</h2>

          <p>Your verification code is:</p>

          <h1 style="letter-spacing:5px;color:#2563eb;">
            ${otp}
          </h1>

          <p>This OTP is valid for <b>5 minutes</b>.</p>

          <hr>

          <p>If you didn't request this email, you can safely ignore it.</p>
        </div>
      `,
    });

   
  } catch (error) {
    throw error;
  }
};