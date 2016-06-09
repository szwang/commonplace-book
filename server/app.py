import os
from flask.ext.sqlalchemy import SQLAlchemy
from logging import StreamHandler
from sys import stdout
from flask import Flask
from flask_login import LoginManager

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    from api.commonplace_book import cp_book_api
    from views.index import index_view

    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']

    app.register_blueprint(cp_book_api.blueprint, url_prefix='/api')
    app.register_blueprint(index_view)

    db.init_app(app)

    login_manager.init_app(app)
    login_manager.login_view = 'login'

    handler = StreamHandler(stdout)
    app.logger.addHandler(handler)
    return app
