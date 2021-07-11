from flask import Flask, request
from flask import session
from flask import render_template
from flask_cors import CORS

from config import *
from model.models import db

# Instancia de aplicacion en Flask
app = Flask(__name__, static_folder = 'public', static_url_path='/')
app.config.from_object(ProductionConfig)

CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

# Iniciar servidor (ejecutar)
if __name__ == '__main__':

    db.init_app(app)

    with app.app_context():
        db.create_all()
        
    app.run()