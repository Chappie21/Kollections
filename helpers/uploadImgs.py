"""
    Se definenen funciones para el manejo de ficheros (imagenes)
"""
import os
from werkzeug.utils import secure_filename

# Archivos admitidos
archivos = ['png', 'jpg', 'jpeg', 'gif', 'svg']

# Crea un directorio para guardar imagenes en caso de no existir
def addDirect():
    
    if(not os.path.exists(os.getcwd() + "/img")):
        os.mkdir(os.getcwd() + "/img")

# Cargar o guardar archivo
def uploadProfile(file):

    addDirect()

    try:

        file.save(os.getcwd() + "/img/" + secure_filename(file.filename))
        return os.getcwd() + "/img/" + secure_filename(file.filename)

    except FileNotFoundError:
        print("Error al almacenar fichero")
        return ''

# Confirmar tipo de archivo
def allowedFileType(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in archivos 