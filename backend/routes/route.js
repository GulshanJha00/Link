const express = require('express');
const route = express.Router();
const gemini = require("../controllers/Gemini")
const judge0 = require("../controllers/judge0")
route.post("/gemini",gemini)

route.post("/judge0", judge0)

module.exports = route;