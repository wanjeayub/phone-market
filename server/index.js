const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// routes
const testRouter = require("./src/routes/test.route.js");
const authRouter = require("./src/routes/auth/auth.routes.js");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

dotenv.config();

// Define port
const PORT = process.env.PORT || 5000;
const app = express();

// connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo db connected successfully"))
  .catch((error) => {
    console.log(error);
  });

// enable cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// endpoints
app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`App is running ${PORT}`);
});
