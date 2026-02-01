from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

characters = {
    "luffy": {"name": "Monkey D. Luffy", "role": "Captain", "crew": "Straw Hat Pirates"},
    "zoro": {"name": "Roronoa Zoro", "role": "Swordsman", "crew": "Straw Hat Pirates"},
    "nami": {"name": "Nami", "role": "Navigator", "crew": "Straw Hat Pirates"},
    "sanji": {"name": "Sanji", "role": "Cook", "crew": "Straw Hat Pirates"}
}

@app.get("/character/{name}")
def get_character(name: str):
    return characters.get(name.lower(), {"error": "Character not found"})
