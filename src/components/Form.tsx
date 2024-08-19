import { useForm } from "react-hook-form";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import useStore from "../store";

const genAI = new GoogleGenerativeAI("AIzaSyD6YBe5zvUq-53g1ZZ2qTk1zaU4rf4frxw");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export interface promptRequest {
  prompt: string;
}

const Form = () => {
  const { register, handleSubmit, reset } = useForm<promptRequest>();
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<string>("");
  const updateAnswer = useStore((state) => state.updateResponse);
  const updateLoading = useStore((state) => state.updateLoading);
  const updateQuestion = useStore((state) => state.updateQuestion);

  const submit = async (data: promptRequest) => {
    updateLoading(true);
    updateQuestion(data.prompt);
    reset();
    setLoading(true);
    const prompt = data.prompt;
    const result = await model.generateContent(prompt);
    const res = await result.response;
    const text = res.text();
    setLoading(false);
    setResponse(text);
    updateAnswer(text);
    updateLoading(false);
  };

  if (!loading) {
    console.log(response);
  }

  return (
    <form
      className="rounded-2xl overflow-hidden w-full grid grid-cols-12 p-4 gap-2"
      onSubmit={handleSubmit(submit)}
    >
      <input
        {...register("prompt")}
        className="rounded-2xl bg-slate-600 p-4 focus:outline-slate-900 text-white col-span-10 hover:bg-slate-500 cursor-pointer"
        type="text"
      />
      <button className="py-4 px-8 bg-slate-500 rounded-2xl text-slate-100 col-span-2">
        Ask
      </button>
    </form>
  );
};

export default Form;
