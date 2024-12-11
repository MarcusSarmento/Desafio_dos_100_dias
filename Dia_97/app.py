from flask import Flask,jsonify,request

app = Flask(__name__)

#dados
users = [
    {'id': 1, 'name': 'João', 'email':'gygu@example.com'},
    {'id': 2, 'name': 'Maria','email':'gsdawdf@example.com'},
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users),200

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user :
        return jsonify(user),200
    else:
        return jsonify({'message': 'Usuário não encontrado'}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        'id': len(users) + 1,
        'name' : data['name'],
        'email' : data['email']
    }
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = next((u for u in users if u['id'] == user_id), None)
   
    if user:
        user['name'] = data['name']
        user['email'] = data['email']
        return jsonify(user), 200
    else:
        return jsonify({'message': 'Usuário não encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)