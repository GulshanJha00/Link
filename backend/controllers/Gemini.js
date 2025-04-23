const {GoogleGenAI} = require("@google/genai");
const dotenv = require("dotenv");
dotenv.config();
const gemini = async (req, res) => {
  const message = req.body.message;
  const language = req.body.language

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

  try{
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `${message} is in ${language} read this code and provide hint how to solve the error in this code. Just hint no actual code. Keep is short and simple.If the code is correct tell that it is correct and if possible suggest him how to improve. If not just tell him that code is correct and problem can be with compiler. Your output should be within 50 words only`,
      });
      console.log(response.text);
      return res.status(200).send({
        message: "Received values and processed with AI",
        aiResponse: response.text,
    });
  }
  catch (error) {
    console.error("Error processing AI request:", error);
    return res.status(500).send({error: "Failed to process the AI request"});
  }
};

module.exports = gemini;

