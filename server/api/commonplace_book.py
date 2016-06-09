# -*- coding: utf-8 -*-
from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from models import Note, User, Tag, register_user, validate_registration
from flask_login import login_user

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
    # function to login user

    print args.username, args.password

    return None, 204

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
    password = args.password
    email = args.email

    print username, password, email

    registration_result, valid_registration = validate_registration(username, password)

    if valid_registration:
      user = register_user(username, email, password)
      login_user(user)
      response = {
        'status': 'success',
        'user': user.username
      }
      response.set_cookie('username', user.username, expires=datetime.utcnow() + COOKIE_DURATION, domain=current_app.config['COOKIE_DOMAIN'])
      response.set_cookie('email', user.email, expires=datetime.utcnow() + COOKIE_DURATION, domain=current_app.config['COOKIE_DOMAIN'])
      response.set_cookie('user_id', str(user.id), expires=datetime.utcnow() + COOKIE_DURATION, domain=current_app.config['COOKIE_DOMAIN'])
      return response

    else:
      return {
        'status': 'error',
        'message': registration_result
      }


    print args.username, args.password
    new_user = User(username=args.username, password=args.password)

    db.session.add(new_user)
    db.session.commit()

    return None, 204

