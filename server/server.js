const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const routes = require("../routes/api");

/**
 * username: cj1231
 * password: shanghai
 */
const MONGODB_URI =
  "mongodb+srv://cj1231:shanghai@companycluster.i9rsx.mongodb.net/CompanyCluster?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost/zanyoDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check if mongoose has been sucessfully connected
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

const PORT = process.env.PORT || 8080;

//specifiy cors path
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
  })
);

//used for HTTP logger
app.use(morgan("tiny"));

app.use("/", routes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
