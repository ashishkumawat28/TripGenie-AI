import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tripTitle: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    travelStyle: {
      type: String,
      enum: ["Solo", "Friends", "Family", "Couple"],
      required: true,
    },

    tripStatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },

    totalBudget: {
      type: String,
      required: true,
    },

    days: {
      type: Array,
      required: true,
    },

    travelTips: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trip", tripSchema);