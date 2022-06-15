import mongoose, { Model } from "mongoose";

export const DATABASE_URL = process.env.DATABASE_URL ?? "mongodb://db:27017";

export const connect = async () => {
  await mongoose.connect(DATABASE_URL).catch((err) => console.log(err));
  console.log("Mongoose Connection Established!");
};
