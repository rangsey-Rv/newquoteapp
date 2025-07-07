const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const quotes = [
  "Believe you can and you're halfway there.",
  "Everything you can imagine is real.",
  "The best way out is always through.",
  "Keep going. Everything you need will come to you.",
  "Your only limit is your mind.",
];

app.get("/api/quote", (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
});

app.listen(PORT, () => {
  console.log(`Quote server running at http://localhost:${PORT}`);
});
