const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const routes = require("./routes/api");
const MONGODB_URI =
  "mongodb+srv://cj1231:shanghai@companycluster.i9rsx.mongodb.net/CompanyCluster?retryWrites=true&w=majority";

//for deployment: process.env.MONGODB_URI;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zanyoDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check if mongoose has been sucessfully connected
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

//choose whatever port heroku is available
const PORT = process.env.PORT || 8080;
// const PORT = 8080;

//specifiy cors path
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
  })
);

//to receive the response body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//used for HTTP logger
app.use(morgan("tiny"));

app.use("/api", routes);

//to know whether files are on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
