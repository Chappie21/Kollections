from datetime import datetime
from os import error
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import postgresql
import bcrypt
from sqlalchemy.orm import backref, relationship
from sqlalchemy.sql.schema import ForeignKey

db = SQLAlchemy()

# MODELADO DE USUARIOS
class User(db.Model):

    # Nombre de la entidad o tabla
    __tablename__ = 'Usuarios'

    # Atributos del modelo
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), unique = True)
    email = db.Column(db.String(50), unique = True)
    password = db.Column(db.Text())
    profileImg = db.Column(db.Text())
    descripcion = db.Column(db.String(120))
    collections = db.relationship('Collection', backref = "User", passive_deletes = 'all') # Relacion con la entidad Colecciones
    tutorial = db.Column(db.Boolean, default = False)

    # Constructor
    """
        El constructor es sobrescrito para que al recibir la contraseña
        esta reciba un hashing por medio de bcrypt
    """
    def __init__(self, username, email, password, profileImg = None, descripcion = None):

        self.username = username
        self.email = email
        self.profileImg = profileImg
        self.descripcion = descripcion

        # Obtener password encriptado
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14)).decode('utf-8')

    # verificar contraseña ingresada 
    def verificarPassword(self, password):
         return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

    def changePassword(self, newpassword):
        self.password = bcrypt.hashpw(newpassword.encode('utf-8'), bcrypt.gensalt(14)).decode('utf-8')

# Modelado de colecctiones
class Collection(db.Model):

    # Nombre de la entidad o tabla
    __tablename__ = 'Colecciones'

    # Atributos del modelo
    id = db.Column(db.Integer, primary_key = True)
    user = db.Column(db.Integer, db.ForeignKey('Usuarios.id', ondelete = 'CASCADE'))
    name = db.Column(db.String(50))
    portada = db.Column(db.Text())
    create_date = db.Column(db.DateTime, default = datetime.now())
    imagenes = db.relationship('Images', backref = "Collection", passive_deletes = 'all') # Relacion con la entidad Colecciones

    def __init__(self, user, name, portada = None):

        self.user = user
        self.name = name
        self.portada = portada

# Modelo de Imagenes
class Images(db.Model):

    # Nombre de la entidad o tabla
    __tablename__ = 'Imagenes'

    # Atributos del modelo
    id = db.Column(db.Integer, primary_key = True)
    collection = db.Column(db.Integer, db.ForeignKey('Colecciones.id', ondelete = 'CASCADE'))
    descripccion = db.Column(db.Text())
    urlImg = db.Column(db.Text())
    tags = db.Column(postgresql.ARRAY(postgresql.TEXT))
    add_date = db.Column(db.DateTime, default = datetime.now())

    def __init__(self, collection, descripccion, urlImg, tags):

        self.collection = collection
        self.descripccion = descripccion
        self.urlImg = urlImg
        self.tags = tags