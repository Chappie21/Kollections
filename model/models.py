from os import error
from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()

class User(db.Model):

    # Nombre de la tabla
    __tablename__ = 'Usuarios'

    # Atributos del modelo
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), unique = True)
    email = db.Column(db.String(50), unique = True)
    password = db.Column(db.Text())
    profileImg = db.Column(db.Text())

    # Constructor
    """
        El constructor es sobrescrito para que al recibir la contraseña
        esta reciba un hashing por medio de bcrypt
    """
    def __init__(self, username, email, password, profileImg = None):

        self.username = username
        self.email = email
        self.profileImg = profileImg

        # Obtener password encriptado
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(14)).decode('utf-8')

    # verificar contraseña ingresada 
    def verificarPassword(self, password):
         return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))
      
