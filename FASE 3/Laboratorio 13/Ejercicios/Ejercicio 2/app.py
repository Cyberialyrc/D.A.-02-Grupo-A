# ARCHIVO : app.py
# AUTOR	: Manrique Silva Ricardo Gabriel
# FECHA : 25/11/2024
# DESCRIPCIÓN : Archivo encargado de iniciar un servidor Flask para interactuar con la base de datos en Firebase.

# Importa las librerías necesarias para crear la aplicación Flask, manejar JSON y realizar solicitudes HTTP
from flask import Flask, jsonify, request

# Importa las librerías necesarias para interactuar con Firebase
import firebase_admin
from firebase_admin import credentials, db

# Inicializar Firebase con las credenciales del archivo JSON
cred = credentials.Certificate("firebase_credentials.json")  # Credenciales en JSON

# Inicializa la aplicación de Firebase con las credenciales y la URL de la base de datos en tiempo real
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://databaseda-fba87-default-rtdb.firebaseio.com/' # URL de la base de datos Firebase Realtime Database
})

# Inicializa la aplicación Flask
app = Flask(__name__)

# Ruta para obtener datos desde Firebase
@app.route('/data', methods=['GET'])
def get_data():
    # Se hace referencia a la ruta '/datos' en la base de datos de Firebase
    ref = db.reference('/datos')  # Ruta en la base de datos Firebase
    data = ref.get()  # Obtiene los datos de la base de datos
    return jsonify(data)  # Devuelve los datos en formato JSON como respuesta

# Ruta para agregar datos a Firebase
@app.route('/data', methods=['POST'])
def add_data():
    # Se hace referencia a la misma ruta '/datos' en la base de datos de Firebase
    ref = db.reference('/datos')  # Ruta en la base de datos Firebase
    new_data = request.json  # Obtiene los datos enviados en la solicitud POST en formato JSON
    ref.push(new_data)  # Agrega los nuevos datos a la base de datos Firebase
    return jsonify({"message": "Datos agregados correctamente", "data": new_data})  # Devuelve un mensaje de éxito y los datos agregados

# Verifica si el script se está ejecutando directamente
if __name__ == "__main__":
    # Inicia el servidor Flask en modo debug
    app.run(debug=True)