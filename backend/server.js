const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mobile Shop Backend is Running");
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "iPhone 15",
      price: 59999
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 54999
    }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});