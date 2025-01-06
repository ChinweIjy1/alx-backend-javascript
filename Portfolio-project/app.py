# app.py (Flask Backend)
from flask import Flask, jsonify, request
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Flask app and Firebase
app = Flask(__name__)
CORS(app)
cred = credentials.Certificate("path/to/firebase-credentials.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route('/api/info', methods=['GET'])
def get_info():
    data = db.collection('info').get()
    info = {doc.id: doc.to_dict() for doc in data}
    return jsonify(info)

@app.route('/api/quiz', methods=['POST'])
def submit_quiz():
    user_data = request.json
    db.collection('quiz_submissions').add(user_data)
    return jsonify({"message": "Submission successful"}), 201

@app.route('/api/community', methods=['POST'])
def community_post():
    post = request.json
    db.collection('community_posts').add(post)
    return jsonify({"message": "Post added"}), 201

if __name__ == '__main__':
    app.run(debug=True)
