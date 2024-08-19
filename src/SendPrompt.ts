import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const genAI = new GoogleGenerativeAI("AIzaSyD6YBe5zvUq-53g1ZZ2qTk1zaU4rf4frxw");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const SendPrompt = async (search: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<string>("");
  if (search) {
    setLoading(true);
    const prompt = search;
    const result = await model.generateContent(prompt);
    const res = await result.response;
    const text = res.text();
    setLoading(false);
    setResponse(text);
  }

  return { response, loading };
};

export default SendPrompt;
