import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from 'body-parser';
import userRouter from "./routes/user.js";
import playerRouter from "./routes/playerInfo.js"
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const port = 5000;

const app = express();

app.use(morgan("dev"));
// app.use(bodyParser.json());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/cardano-athletics", userRouter);
app.use("/cardano-athletics", playerRouter);


mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("running port 5000");
    });
  })
  .catch((err) => {
    console.log(`${err} did not found`);
  });
