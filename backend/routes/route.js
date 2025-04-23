const express = require('express');
const route = express.Router();
const gemini = require("../controllers/Gemini")

route.post("/gemini",gemini)


module.exports = route;