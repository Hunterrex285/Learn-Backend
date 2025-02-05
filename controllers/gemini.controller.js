import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getGeminiData = async (req, res) => {
  try {
    // console.log(process.env.GEMINI_API_KEY);
    const prompt = req.body.question;
    console.log(prompt);
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return res
      .status(200)
      .json({ success: true, data: result.response.text() });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

export { getGeminiData };

