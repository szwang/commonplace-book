# -*- coding: utf-8 -*-
from flask import request, Blueprint, current_app
from flask_restful import Api, Resource, reqparse
from models import Note, User, Tag, register_user, validate_registration, check_user_auth
from flask_login import login_user, logout_user
import bcrypt
from datetime import timedelta, datetime
from .serialization import jsonify

COOKIE_DURATION = timedelta(days=365)

cp_book_api = Api(Blueprint('cp_book_api', __name__)) 

notesParser = reqparse.RequestParser()
notesParser.add_argument('content')
notesParser.add_argument('category')

@cp_book_api.resource('/cp-book')
class NotesAPI(Resource):
  @staticmethod
  def get():
    notes = Note.query.all()

    return [{
      'id': note.id,
      'content': note.content,
      'category': note.category
    } for note in notes]


  def post(self):
    from app import db

    args = notesParser.parse_args()
    new_note = Note(content=args['content'], category=args['category'])

    db.session.add(new_note)
    db.session.commit()

    return {
      'id': new_note.id,
      'content': new_note.content,
      'category': new_note.category,
      'created': new_note.created_at.isoformat() + 'Z'
    }

@cp_book_api.resource('/cp-book/<int:note_id>')
class NoteAPI(Resource):
  @staticmethod
  def delete(note_id):
    from app import db
    note = Note.query.get_or_404(note_id)
    db.session.delete(note)
    db.session.commit()

    return None, 204

loginParser = reqparse.RequestParser()
loginParser.add_argument('username')
loginParser.add_argument('password')

@cp_book_api.resource('/auth/login')
class LoginAPI(Resource):

  def post(self):
    from app import db

    args = loginParser.parse_args()
    username = args.get('username')
    password = args.get('password').encode('utf-8')

    user, auth_status = check_user_auth(password, username=username)

    print user, auth_status

    if(auth_status):
      login_user(user)
      response = jsonify({
        'status': 'success'
      })

      response.set_cookie('username', user.username, expires=datetime.utcnow() + COOKIE_DURATION, domain=None)
      response.set_cookie('user_id', str(user.id), expires=datetime.utcnow() + COOKIE_DURATION, domain=None)
      
      return response

    else: #username and password do not match
      return jsonify({
        'status': 'error'
      }, status=401)


signupParser = reqparse.RequestParser()
signupParser.add_argument('username')
signupParser.add_argument('password')
signupParser.add_argument('email')

@cp_book_api.resource('/auth/signup')
class SignupAPI(Resource):
 
  def post(self):
    from app import db

    args = signupParser.parse_args()
    username = args.username
    password = args.password.encode('utf-8')
    hashedpw = bcrypt.hashpw(password, bcrypt.gensalt()).decode()
    email = args.email

    print username, hashedpw, email

    registration_result, valid_registration = validate_registration(username, hashedpw)

    if valid_registration:
      user = register_user(username, email, hashedpw)
      login_user(user)
      response = jsonify({
        'status': 'success',
        'user': user.username
      })
      response.set_cookie('username', user.username, expires=datetime.utcnow() + COOKIE_DURATION, domain=None)
      response.set_cookie('email', user.email, expires=datetime.utcnow() + COOKIE_DURATION, domain=None)
      response.set_cookie('user_id', str(user.id), expires=datetime.utcnow() + COOKIE_DURATION, domain=None)
      return response

    else:
      return {
        'status': 'error',
        'message': registration_result
      }

logoutParser = reqparse.RequestParser()
logoutParser.add_argument('username')
logoutParser.add_argument('id')

@cp_book_api.resource('/auth/logout')
class LogoutAPI(Resource):

  def post(self):
    args = logoutParser.parse_args()
    print args

    logout_user()

    response = jsonify({
      'status': 'success',
      'message': 'You have been logged out.'
    })
    response.set_cookie('username', '', expires=0, domain=None)
    response.set_cookie('email', '', expires=0, domain=None)
    response.set_cookie('user_id', '', expires=0, domain=None)
    return response

    # print args.username, args.password
    # new_user = User(username=args.username, password=args.password)

    # db.session.add(new_user)
    # db.session.commit()

    # return None, 204

