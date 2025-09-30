import { useState } from "react";

function Home() {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("AI is the future of technology. It powers chatbots and self-driving cars.");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">AI Chatbot</h1>
      <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={3} className="w-full border p-2 mb-2"/>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question..." className="w-full border p-2 mb-2"/>
      <button onClick={handleAsk} className="bg-blue-500 text-white px-4 py-2">Ask</button>
      {answer && <p className="mt-4"><b>Answer:</b> {answer}</p>}
    </div>
  );
}

export default Home;
