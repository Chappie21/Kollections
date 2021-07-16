"""
    ESTE SCRIPT CONTIENE FUNCIONES ORIENTADAS A LA AUTENTICACION
    DEL USUARIO
"""
from model.models import User
from sqlalchemy import or_
from model.models import db
from flask import jsonify

# Funcion de registro de nuevo usuario
def register(request):

    resp = {}
    
    if (request.form['username'] and request.form['email'] and request.form['password']):
        ExistEmail = db.session.query(User).filter_by(email=request.form['email']).all()

        # En caso de que el corre electronico no este en uso, crear un nuevo usuario
        if(len(ExistEmail) == 0):

            # Crear nuevo usuario
            newUser = User(
                username = request.form['username'],
                email = request.form['email'],
                password = request.form['password'],
            )

            # Agregar usuario y realziar commit
            db.session.add(newUser)
            db.session.commit()

            return jsonify({"status": 201, "mensaje": "Usuario registrado con exito"}), 201
        else:

            return jsonify({"status": 401, "mensaje": "El Correo ingresado ya pertenece a un usuario"}), 200
    else:

        return jsonify({"status": 400, "mensaje": "Por favor ingrese todos los datos"}), 400

# Login de usuario
def login(request):
    
    if (request.form['user'] and request.form['password']):
        
        user = db.session.query(User).filter(or_(
            User.username == request.form['user'],
            User.email == request.form['user']
        )).first()

        if user and user.verificarPassword(request.form['password']):
            
            return jsonify({"status": 200, "mensaje": "Login exitoso"}), 200

        else:

            return jsonify({"status": 400, "mensaje": "Credenciales incrrectas"}), 400

    else:
        return jsonify({"status": 400, "mensaje": "Por favor ingrese todas las credenciales"}), 400
