import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export const conectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected >>>");
  } catch (err) {
    console.log(err);
  }
};
