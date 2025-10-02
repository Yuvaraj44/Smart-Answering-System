import { useState } from "react";
import { Send, MessageSquare, Sparkles } from 'lucide-react';

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
    <>
      {/* <section className="flex items-center justify-center h-screen">
        <div className="p-4 max-w-md mx-auto ">
          <h1 className="text-xl font-bold mb-2">AI Chatbot</h1>
          <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={3} className="w-full border bg-white p-2 mb-2" />
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question..." className="w-full bg-white border p-2 mb-2" />
          <div className="mx-auto text-center">
            <button onClick={handleAsk} className="bg-green-500 text-white px-4 py-2 text-center rounded-full cursor-pointer hover:scale-105 duration-300">Ask</button>
          </div>
          {answer && <p className="mt-4"><b>Answer:</b> {answer}</p>}
        </div>
      </section> */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">AI Assistant</h1>
                  <p className="text-blue-100 text-sm">Ask me anything</p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Context 
                </label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
               
    
                  placeholder="Provide any relevant context or background information..."
                  className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Question
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                    placeholder="Type your question here..."
                    className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50"
                  />
                  <MessageSquare className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <button
                onClick={handleAsk}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Send className="w-5 h-5" />
                Ask Question
              </button>
              {answer && (
                <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Answer</h3>
                      <p className="text-gray-700 leading-relaxed">{answer}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
