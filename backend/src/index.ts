import cors from "cors";
import express from "express";
const PORT = 3000;

const app = express();

// Middleware to handle JSON
app.use(cors());

// Simple Endpoint
app.get("/test", (_, res) => {
  res.send("Hi from backend!");
  console.log("Endpoint got hit");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
