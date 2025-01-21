from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir CORS para o front-end

@app.route('/')
def home():
    return 'API is running!'

if __name__ == '__main__':
    app.run(debug=True)
