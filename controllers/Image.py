import sqlalchemy
from model.models import *
from model.models import db
from flask import jsonify

from helpers.uploadImgs import *
from model.models import Collection, Images

def addImage(request, idUser):

    # Obtener coleccion
    collecion = Collection.query.get(request.form['idCollecion'])

    if request.files['image'] != '':
        if collecion is not None:
            if idUser == collecion.user:
                
                try:
                    if(allowedFileType(request.files['image'].filename)):
                        url = uploadProfile(request.files['image'])

                        newImage = Images(
                            collection = request.form['idCollecion'],
                            urlImg = url,
                            descripccion = request.form['descripccion'],
                            tags = request.form['tags'].split(' ')
                        )

                        db.session.add(newImage)
                        db.session.commit()
                        return jsonify({"status": 201, "mensaje": "Imagen añadida con exito"}), 201

                    else:
                         return jsonify({"status": 400, "mensaje": "Tipo de archivo no admitido"}), 400
                            
                except error:
                    print("Error al añadir imagen para el usuario: {} \n error: {}".format(idUser, error) )
                    return jsonify({"status": 500, "mensaje": "Error al añadir imagen"}), 500
                        
            else:
                return jsonify({"status": 400, "mensaje": "La coleccion no le pertenece"}), 400
        else:
            return jsonify({"status": 400, "mensaje": "coleccion no existente"}), 400
    else:
         return jsonify({"status": 400, "mensaje": "No se ha enviado algun archivo del tipo imagen"}), 400