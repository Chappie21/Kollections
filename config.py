"""
    Este script define una serie de configuraciones por medio
    de atributos en una clase.

    El micro framework de flask es capaz de leer este.
"""
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

class Config(object):
    # SECRET_KEY = os.urandom(24)
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CLOUD_NAME=os.getenv('CLOUD_NAME')
    CLOUD_API_KEY=os.getenv('CLOUD_API_KEY')
    CLOUD_API_SECRET=os.getenv('CLOUD_API_SECRET')

# Configuracion de produccion 
class ProductionConfig(Config):
    DEBUG = False

# Configuracion de modo de desarrollo
class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True