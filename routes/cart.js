const express = require("express");
const router = express.Router();

const { calculateTotal } = require("../controllers/cartController");

router.post("/total", calculateTotal);

module.exports = router;
