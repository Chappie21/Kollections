"""
    Este script define controladores de peticiones, para acciones referentes
    a el usuario, obtenecion de datos de usuario y busqueda de perfiles
"""
import sqlalchemy
from model.models import *
from sqlalchemy import or_
from model.models import db
from flask import jsonify

from helpers.uploadImgs import *

###################################### EDICION DE DATOS ######################################

# Edicion de informacion basica del usuario
def editBasicInfo(request, idSession):

    user = User.query.get(idSession)

    # En caso de no existir el usuario, por eliminacion previa
    if user is None:
        return jsonify({"status": 400, "mensaje": "usuario no existente"}), 400
    
    # En caso de modificacion de datos basicos
    if request.form['username'] != '':

        exist = db.session.query(User).filter(User.username == request.form['username']).first()

        # En caso de que el correo ingresado sea el mismo ya colocado, no hará nada
        if(user.username != request.form['username']):
            if exist is None:
                user.username = request.form['username']
            else:
                return jsonify({"status": 400, "mensaje": "Nombre de usuario ya existente", "input": "username"}), 400
    
    if request.form['email'] != '':

        exist = db.session.query(User).filter(User.email == request.form['email']).first()
        
        # En caso de que el correo ingresado sea el mismo ya colocado, no hará nada
        if(user.email != request.form['email']):
            # En caso de que el nuevo correo ya este en uso por otro usuario dará mensaje de error
            if exist is None:
                 user.email = request.form['email']
            else:
                return jsonify({"status": 400, "mensaje": "Correo ya en uso", "input": "email"}), 400

    if request.form['descripcion'] != '':
        user.descripcion = request.form['descripcion']

    # En caso de modificar o cambiar foto de perfil
    if request.files['profileImg'].filename != '':

        if(allowedFileType(request.files['profileImg'].filename)):
            url = uploadProfile(request.files['profileImg'])

            if(url == ''):
                return jsonify({"status": 500, "mensaje": "Error al almacenar archivo"}), 500
            else:
                user.profileImg = url
        else:
            return jsonify({"status": 400, "mensaje": "tipo de archivo no permitido"}), 400

    db.session.commit() # Confirmar cambios

    return jsonify({"status": 201, "mensaje": "datos modificados con exito"}), 201

# Cambio de contraseña
def changePassword(request, idSession):

    # Obtener el usuario de la sesión
    user = User.query.get(idSession)

    if user is not None:

        if user.verificarPassword(request.form['oldpassword']):
            
            user.changePassword(request.form['newpassword'])

            db.session.commit() #Confirmar cambios

            return jsonify({"status": 200, "mensaje": "Contraseña cambiada exitosamente"}), 200

        else:
             return jsonify({"status": 400, "mensaje": "Contraseña incorrecta"}), 400

    else:
        return jsonify({"status": 400, "mensaje": "Usuario no existente"}), 400


def deleteUser(session):
    
    try:
        db.session.query(User).filter(User.id == session['idUser']).delete()
        db.session.commit() # Confirmar cambios
        session.clear() # Eliminar sesión
        return jsonify({"status": 200, "mensaje": "Cuenta eliminada con exito"}), 200
    except sqlalchemy:
        print('Error al eliminar cuenta de usuario: ' + sqlalchemy)
        return jsonify({"status": 500, "mensaje": "Error al eliminar cuenta del usuario"}), 500 

#############################################################################################

# Obtener data del usuario
def getDataUser(idUser, idSession):

    collects = []

    user = db.session.query(User).filter_by(id=idUser).first()

    if user:

        collections = db.session.query(Collection).filter(Collection.user == idUser)
        
        print(collections)

        for coleccion in collections:
            collects.append({
                "id": coleccion.id,
                "name": coleccion.name,
                "portada": coleccion.portada
            })

        return jsonify({
            "status": 200,
            "mensaje": "Data de usuario obtenido",
            "edit": str(idUser) == str(idSession),
            "user": {
                "name": user.username,
                "email": user.email,
                "descripcion": user.descripcion,
                "profileImg": user.profileImg,
                "collections": collects
            }
        }), 200

    else:
        return jsonify({"status": 400, "mensaje": "Usuario no existente"}), 400
