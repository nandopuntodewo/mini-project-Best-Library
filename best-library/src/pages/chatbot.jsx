import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export default function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          { role: "user", content: prompt },
        ],
      });
      const choice = response.choices[0].message.content;
      setResult([choice]);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#3C6E71] text-white p-8 rounded-xl text-center max-w-xl w-full">
        <h2 className="font-bold text-2xl mb-4 font-unbounded">Chat Bot</h2>
        <div className="mt-4">
          <div className="input-group">
            <span className="input-group-text font-poppins">Search for your books bellow</span>
            <textarea
              className="block w-full h-32 rounded-lg font-poppins mt-5"
              aria-label="With textarea"
              placeholder="Enter your prompt here"
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-auto h-7 rounded-md font-poppins"
              onClick={handleSubmit}
              disabled={isLoading || prompt.length === 0}
            >
              {isLoading ? "Searching..." : "Search Book"}
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold font-unbounded">BEST LIBRARY</p>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
