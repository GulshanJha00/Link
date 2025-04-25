const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const langMap = {
  c: 50,
  cpp: 54,
  java: 62,
  js: 63,
  python: 71,
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const judge0 = async (req, res) => {
  const { source_code, language } = req.body;

  let language_id = langMap[language];

  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        source_code,
        language_id,
        wait: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.JUDGE0_API,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    const token = response.data.token;

    let result;
    let attempts = 0;

    // poll for result (max 10 attempts, 1 second delay)
    while (attempts < 10) {
      const resultResponse = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.JUDGE0_API,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        }
      );

      result = resultResponse.data;

      if (result.status.id >= 3) {
        break;
      }

      await sleep(2000); 
      attempts++;
    }

    return res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred during the code execution" });
  }
};

module.exports = judge0;
