const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");


const db = require("./db.config")

const app = express();


const productRouter = require("./routes/productRouter");

var corsOptions = {
  origin: "http://localhost:3000",
};








app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering application." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", productRouter);
