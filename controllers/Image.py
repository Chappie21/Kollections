import sqlalchemy
from model.models import *
from model.models import db
from flask import jsonify

from helpers.uploadImgs import *
from model.models import *

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

def getImages(idUser):
    
    publicaciones = db.session.query(User.username, User.profileImg, Images.descripccion, Images.urlImg, Images.tags).filter(
        Images.collection == Collection.id).filter(Collection.user == User.id).filter(
            User.id != idUser
        ).all()
    
    respHome = []

    for pub in publicaciones:
        respHome.append({
            "username": pub[0],
            "profileImg": pub[1],
            "descripccion": pub[2],
            "pubUrl": pub[3],
            "tags": pub[4]
        })

    return jsonify({"status": 200, "publicaciones": respHome}), 200
