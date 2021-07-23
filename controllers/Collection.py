import sqlalchemy
from model.models import *
from model.models import db
from flask import jsonify

from helpers.uploadImgs import *
from model.models import Collection
from model.models import Images

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

# Eliminar una coleccion
def deleteCollection(idColeccion, idUser):
    
    # Obtener coleccion
    coleccion = Collection.query.get(idColeccion)

    if coleccion is not None:
        # Comprobar que la coleccion pertenezca a dicho usuario
        if(idUser == coleccion.user):
            db.session.query(Collection).filter(Collection.id == idColeccion).delete()
            db.session.commit()
            return jsonify({"status": 200, "mensjae": "Coleccion eliminada con exito"}), 200
        else:
            return jsonify({"status": 400, "mensjae": "La coleccion no le pertenece"}), 400
    else:
        return jsonify({"status": 400, "mensjae": "La coleccion no existente"}), 400

# Obtener imagenes de una coleccion
def getImgCol(idColeccion):

    Imagenes = db.session.query(Images).filter(Images.collection == idColeccion)

    if Imagenes is not None:
        
        resp = []

        for img in Imagenes:
            resp.append({
                "id": img.id,
                "descripccion": img.descripccion,
                "urlImg": img.urlImg,
                "tags": img.tags
            })

        return jsonify({"status": 200, "mensjae": "Imagenes obtenidas", "imgs": resp}), 200

    else:
        return jsonify({"status": 400, "mensaje": "coleccion no existente"}), 400
