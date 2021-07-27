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

# Obtener imagenes para pagina de inicio, (todas aquellas que sean de otros usuarios)
def getImages(idUser):
    
    # Encontrar todas las publicaciones o imagenes que no pertenezcan al usuario
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

# Buscar imagenes por medio de tagnames
def searchImage_byTag(tag):

    # la consulta busca todas las publicaciones en donde "tag" se encuentre en el arreglo tags
    publicaciones = db.session.query(User.username, User.profileImg, Images.descripccion, Images.urlImg, Images.tags).filter(
        Images.collection == Collection.id).filter(Collection.user == User.id).all()
    
    # Comprobar si se han encotrado publicaciones
    if publicaciones is not None:
        respHome = []

        for pub in publicaciones:
           if tag in pub.tags:
                respHome.append({
                    "username": pub[0],
                    "profileImg": pub[1],
                    "descripccion": pub[2],
                    "pubUrl": pub[3],
                    "tags": pub[4]
                })

        return jsonify({"status": 200, "publicaciones": respHome}), 200

    else:
        # En caso de no encotrar publicaciones
        return jsonify({"status": 400, "mesnaje": "no se encontraron publicacion con dicho tag"}), 400

# Eliminar una imagen dada
def EliminateImg(idImg, idUser):
    
     # Obtener coleccion
    Imagen = Images.query.get(idImg)

    if Imagen is not None:
        # Comprobar que la imagen pertenezca a dicho usuario

        # Obtener coleccion propietario
        coleccion = db.session.query(Collection.user).filter(
        Images.collection == Imagen.collection).filter(Collection.id == Imagen.collection).first()

        if(idUser == coleccion.user):
            db.session.query(Images).filter(Images.id == idImg).delete()
            db.session.commit()
            return jsonify({"status": 200, "mensjae": "Imagen eliminada con exito"}), 200
        else:
            return jsonify({"status": 400, "mensjae": "La imagen no le pertenece"}), 400
    else:
        return jsonify({"status": 400, "mensjae": "La imagen no existe"}), 400