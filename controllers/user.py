"""
    Este script define controladores de peticiones, para acciones referentes
    a el usuario, obtenecion de datos de usuario y busqueda de perfiles
"""
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
        user.username = request.form['username']
    
    if request.form['email'] != '':
        user.email = request.form['email']

    if request.form['descripcion'] != '':
        user.descripcion = request.form['descripcion']

    # En caso de modificar o cambiar foto de perfil
    if request.files['profile'].filename != '':

        if(allowedFileType(request.files['profile'].filename)):
            url = uploadProfile(request.files['profile'])

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


#############################################################################################

# Obtener data del usuario
def getDataUser(idUser, idSession):

    collects = []

    user = db.session.query(User).filter_by(id=idUser).first()

    if user:

        collections = db.session.query(User, Collection).join(User, User.id == Collection.id)
        
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
