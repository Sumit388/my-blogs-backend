// * Packages Import * //
const express = require("express");
const dotenv = require("dotenv").config();

// * Routes Import * //
const userRoute = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoutes");
const blogRoute = require("./routes/blogRoutes");

// * Middleware Import * //
const errorHandler = require("./middlewares/errorHandler");

// * Utils Import * //
const connectDB = require("./config/dbConnect");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);
app.use("/api/blogs", blogRoute);
app.use(errorHandler);

try {
  app.listen(port, () => console.log(`Server has started on ${port}`));
  connectDB();
} catch (err) {
  console.log(err);
}
