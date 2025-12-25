const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend server is running fine 🚀"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
