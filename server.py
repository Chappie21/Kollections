from flask import Flask, request, redirect
from flask import session
from flask_cors import CORS
from werkzeug.utils import send_from_directory

from config import *
from model.models import db
from controllers.auth import *
from controllers.user import *
from controllers.Collection import *
from controllers.Image import *

# Instancia de aplicacion en Flask
app = Flask(__name__, static_folder = 'public/', static_url_path='/')
app.config.from_object(DevelopmentConfig)

CORS(app)

# Enviar html statico en caso de realziar una peticion en la barra de navegacion del navegador
@app.errorhandler(404)
def not_found(e):
    print(request.path)
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

@app.route('/logOut', methods = ['GET'])
def logOut():
    session.clear()
    return jsonify({"status": 200, "mensaje": "sesion cerrada"}), 200

# Comprobar que el usuario este logueado
@app.route('/isLogin', methods = ['GET'])
def isLogin():

    if(session['idUser'] is not None):
        return jsonify({"status": 200}), 200
    else:
         return jsonify({"status": 400}), 400
         
# Registrar tutorial como visto
@app.route('/quitTutorial', methods = ['POST'])
def eliminateTutorial():
    return QuitTutorial(session['idUser'])


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

@app.route('/Collection', methods = ['POST', 'DELETE'])
def Collection():

    if request.method == 'POST':
        return addCollection(request, session['idUser'])

    if request.method == 'DELETE':
        return deleteCollection(request.get_json()['idColeccion'], session['idUser'])

@app.route('/getCollection/<int:id>', methods = ['GET'])
def getCollection(id):
    return getImgCol(id)
    

############################################################################################

########################################### Imagenes #######################################

@app.route('/Images', methods = ['POST', 'DELETE'])
def Images():

    print(request.get_json())

    if request.method == 'POST':
        return addImage(request, session['idUser'])
    if request.method == 'DELETE':
        return EliminateImg(request.get_json()['idImg'],  session['idUser'])

@app.route('/getImages', methods = ['GET'])
def Homepage():
    return getImages(session['idUser'])

@app.route('/searchImages/<string:tag>', methods = ['GET'])
def Search(tag):
    return searchImage_byTag(tag)

############################################################################################

db.init_app(app)

# Iniciar servidor (ejecutar)
if __name__ == '__main__':

    with app.app_context():
        db.create_all()
    
    app.run()