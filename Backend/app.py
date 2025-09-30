from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify ["http://localhost:3000"] for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

qa_pipeline = pipeline("question-answering")

class Query(BaseModel):
    question: str
    context: str

@app.post("/chat")
def chat(query: Query):
    result = qa_pipeline(question=query.question, context=query.context)
    return {"answer": result["answer"]}
