from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()

class User(db.Model):

    # Nombre de la tabla
    __tablename__ = 'Users'

    # Atributos del modelo
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), unique = True)
    email = db.Column(db.String(50), unique = True)
    password = db.Column(db.String(70))
    profileImg = db.Column(db.Text())

    # Constructor
    """
        El constructor es sobrescrito para que al recibir la contraseña
        esta reciba un hashing por medio de bcrypt
    """
    def __init__(self, id, username, email, password, profileImg = None):

        self.id = id
        self.username = username
        self.email = email
        self.profileImg = profileImg

        # Obtener password encriptado
        self.password = bcrypt.hashpw(password, bcrypt.gensalt(10))

    # verificar contraseña ingresada 
    def verificarPassword(self, password):
        return bcrypt.checkpw(password, self.password)
