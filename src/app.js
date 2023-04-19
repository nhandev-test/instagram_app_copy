const express = require("express");
const userRoute = require("./routes/user.route");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database");
const friendRoute = require("./routes/friend.route");
const path = require("path");
const multer = require("multer");
const initRouter = require("./routes");
const { default: upload } = require("./services/upload.service");
require("dotenv").config();

db();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/home.html");
});

//multer config
upload;
initRouter(app);

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});

module.exports = app;
