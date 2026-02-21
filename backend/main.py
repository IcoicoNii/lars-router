from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

app = FastAPI()

# Allow Next.js (port 3000) to talk to Python (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load AI Model (XLM-RoBERTa)
classifier = None

@app.on_event("startup")
async def load_ai():
    global classifier
    print("Loading AI Model...")
    # Using a smaller model for speed during development
    classifier = pipeline("text-classification", model="xlm-roberta-base")
    print("AI Ready!")

class Ticket(BaseModel):
    text: str

@app.post("/api/classify")
async def classify_ticket(ticket: Ticket):
    # Mocking logic for now until we fine-tune the model
    # Real logic would use the model output to map to departments
    print(f"Analyzing: {ticket.text}")
    
    # Simple keyword fallback for demonstration if model isn't fine-tuned yet
    text_lower = ticket.text.lower()
    dept = "General Support"
    
    if "sira" in text_lower or "broken" in text_lower:
        dept = "IT Support"
    elif "sweldo" in text_lower or "salary" in text_lower:
        dept = "HR & Payroll"
        
    return {"department": dept, "confidence": 0.95}