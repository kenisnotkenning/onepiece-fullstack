from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

characters = {
    "luffy": {"name": "Monkey D. Luffy", "role": "Captain", "crew": "Straw Hat Pirates"},
    "zoro": {"name": "Roronoa Zoro", "role": "Swordsman", "crew": "Straw Hat Pirates"},
    "sanji": {"name": "Sanji", "role": "Cook", "crew": "Straw Hat Pirates"},
    "robin": {"name": "Nico Robin", "role": "Archaeologist", "crew": "Straw Hat Pirates"}
}

@app.route("/character/<name>")
def get_character(name):
    char = characters.get(name.lower())
    if char:
        return jsonify(char)
    return jsonify({"error": "Character not found"}), 404

@app.route("/")
def home():
    return "One Piece API is running!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
