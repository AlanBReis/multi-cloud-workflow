from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/save-workflow', methods=['POST'])
def save_workflow():
    data = request.get_json()

    # Simulação de salvar em um banco de dados (por enquanto, salva em um arquivo JSON)
    with open("workflows.json", "w") as file:
        json.dump(data, file, indent=4)

    return jsonify({"message": "Workflow salvo com sucesso!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
