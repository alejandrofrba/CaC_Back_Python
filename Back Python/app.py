from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

# Configuración de la base de datos
db_config = {
    'user': 'root',
    'password': 'ColgateAca',
    'host': 'localhost',
    'database': 'cac'
}

def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

@app.route('/users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM Contacto')
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    name = data['nombre']
    fecLleg = data['fecLleg']
    fecSal = data['fecSal']
    TipHab = data['TipHab']
    turno = data['turno']
    email = data['email']
    comentarios = data['Comentarios']


    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO Contacto  (name, fecLleg, fecSal, TipHab, almuerzo, email, comentarios) VALUES (%s, %s, %s, %s, %s, %s, %s)', (name, fecLleg, fecSal, TipHab, turno, email, comentarios ))
    conn.commit()
    user_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({'id': user_id, 'name': name, 'email': email, 'Comentarios': comentarios}), 201

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.json 
    name = data['nombre']
    email = data['email']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE Contacto SET name = %s, email = %s WHERE id = %s', (name, email, id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'id': id, 'name': name, 'email': email})

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM Contacto WHERE id = %s', (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return '', 204

if __name__ == '__main__':
    app.run(port=5001)  # Especifica el puerto aquí


