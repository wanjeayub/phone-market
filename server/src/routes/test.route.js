const express = require("express");

const router = express.Router();

router.get("/message", async (req, res) => {
  res.status(200).json({ message: "app is running okay" });
});

module.exports = router;
