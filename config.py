"""
    Este script define una serie de configuraciones por medio
    de atributos en una clase.

    El micro framework de flask es capaz de leer este.
"""
import os

class Config(object):
    SECRET_KEY = os.urandom(24)
    SQLALCHEMY_DATABASE_URI = 'postgresql://biqpnxyiyjiaht:42e3ecd725496c9e9e8d83175402b1b937b0ed40218eec60cc95fdbe842e90e1@ec2-34-198-31-223.compute-1.amazonaws.com:5432/d5q4v32k2hp3je'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

# Configuracion de produccion 
class ProductionConfig(Config):
    DEBUG = False

# Configuracion de modo de desarrollo
class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False