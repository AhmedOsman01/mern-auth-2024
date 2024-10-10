import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
dotenv.config();

const port = process.env.PORT || 8080;

const __dirname = path.resolve();

const app = express();
//allow us to parse incoming cookies
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//middleware to parse json requests
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"));
  });
}

app.listen(8080, () => {
  connectDB();
  console.log(`Srerve running on port >>> , ${port}`);
});
