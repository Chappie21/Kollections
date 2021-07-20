import sqlalchemy
from model.models import *
from sqlalchemy import or_
from model.models import db
from flask import jsonify

from helpers.uploadImgs import *
from model.models import Collection

# Crear nueva coleccion
def addCollection(request, idUser):
    
    url = None # url de imagen de portada

    try:
        # En caso de añadir una foto de portada a la coleccion
        if request.files['portada'].filename != '':
            if(allowedFileType(request.files['portada'].filename)):
                url = uploadProfile(request.files['portada'])

        newCollection = Collection(
            user = idUser,
            name = request.form['name'],
            portada = url
        )

        db.session.add(newCollection)
        db.session.commit()

        return jsonify({"status": 201, "mensaje": "Collecion creada"}), 201
    except error:
        print("Error al crear nueva coleccion para el usuario: {} \n error: {}".format(idUser, error) )
        return jsonify({"status": 500, "mensaje": "Collecion creada"}), 500