const cors = require("cors");
const express = require("express");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const {
  notFound,
  errorHandler,
  successHandler,
} = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
  console.log(note);
});
app.use("/api/", userRoutes);

app.use(notFound);
app.use(errorHandler);
app.use(successHandler);

app.listen(PORT, console.log("server is running on port 5000"));
