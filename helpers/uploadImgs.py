"""
    Se definenen funciones para el manejo de ficheros (imagenes)
"""
import os
import cloudinary
import cloudinary.uploader as uploader
import cloudinary.api
import uuid
from werkzeug.utils import secure_filename

# Archivos admitidos
archivos = ['png', 'jpg', 'jpeg', 'gif', 'svg']
links = ['https://collage-collections.herokuapp.com/', 'http://localhost:5000/']

# Cargar configuracion de Cloudinary
def loadCloudinaryConfig(cloud_name, api_key, api_secret):
    cloudinary.config(
        cloud_name=cloud_name,
        api_key=api_key,
        api_secret=api_secret
    )

# Cargar o guardar archivo
def uploadProfile(file, userId):
    try:
        response = uploader.upload(
            file,
            folder = f'Kollections/{userId}/', 
            public_id = f'{uuid.uuid4()}',
            overwrite = True,
            resource_type = "image"
        )

        return response.get('secure_url')
    except Exception as error:
        print(error)
        return ''

# Confirmar tipo de archivo
def allowedFileType(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in archivos 