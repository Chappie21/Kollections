from flask import Flask, request
from flask import session
from flask import render_template
from flask_cors import CORS

from config import *
from model.models import db
from controllers.auth import *

# Instancia de aplicacion en Flask
app = Flask(__name__, static_folder = 'public', static_url_path='/')
app.config.from_object(ProductionConfig)

CORS(app)

# Enviar html statico que contiene todas las funcionalidades de la pagina
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Endpoint de registro
@app.route('/registro', methods = ['POST'])
def regsitro():
    return register(request)

# Endpoint para realziar login
@app.route('/login', methods = ['POST'])
def IniciarSesion():
    return login(request)


# Iniciar servidor (ejecutar)
if __name__ == '__main__':

    db.init_app(app)

    with app.app_context():
        db.create_all()
        
    app.run()