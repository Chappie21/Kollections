from flask import Flask, request
from flask import session
from flask_cors import CORS
from werkzeug.utils import send_from_directory

from config import *
from model.models import db
from controllers.auth import *
from controllers.user import *
from controllers.Collection import *

# Instancia de aplicacion en Flask
app = Flask(__name__, static_folder = 'public/', static_url_path='/')
app.config.from_object(DevelopmentConfig)

CORS(app)

# Enviar html statico en caso de realziar una peticion en la barra de navegacion del navegador
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# Enviar html statico que contiene todas las funcionalidades de la pagina
@app.route('/')
def index():
    return app.send_static_file('index.html')

##################################### Verficar Sessión #####################################

@app.before_request
def before_request():
    if ('idUser' not in session and request.endpoint not in ['index', 'registro', 'IniciarSesion', 'static']):
        return jsonify({"status": 400, "mensaje": "usuario no autenticado"}), 400

@app.after_request
def after_request(response):
    return response

############################################################################################

########################################### AUTH ###########################################

# Endpoint de registro
@app.route('/registro', methods = ['POST'])
def registro():
    return register(request)

# Endpoint para realziar login
@app.route('/login', methods = ['POST'])
def IniciarSesion():
    return login(request, session)

############################################################################################

########################################### USER ###########################################

@app.route('/dataUser', methods = ['GET'])
def DataUser():
    return getDataUser(request.args.get("id", session['idUser']), session['idUser'])

@app.route('/editBasicData', methods = ['PUT', 'DELETE'])
def editBasicData():
    if request.method == 'PUT':
        return editBasicInfo(request, session['idUser'])
    elif request.method == 'DELETE':
        return deleteUser(session)

@app.route('/changePassword', methods = ['POST'])
def modifPassword():
    return changePassword(request, session['idUser'])

############################################################################################

########################################### Collections ####################################

@app.route('/createCollection', methods = ['POST', 'DELETE'])
def creatCollection():
    
    if request.method == 'POST':
        return addCollection(request, session['idUser'])

############################################################################################

db.init_app(app)

# Iniciar servidor (ejecutar)
if __name__ == '__main__':

    with app.app_context():
        db.create_all()
    
    app.run()