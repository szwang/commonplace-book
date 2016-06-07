# -*- coding: utf-8 -*-
from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from models import Note, User, Tag

cp_book_api = Api(Blueprint('cp_book_api', __name__)) 

parser = reqparse.RequestParser()
parser.add_argument('content')
parser.add_argument('category')

@cp_book_api.resource('/cp-book')
class NotesAPI(Resource):
  @staticmethod
  def get():
    notes = Note.query.all()

    return [{
      'id': note.id
    } for note in notes]


  def post(self):
    from app import db

    args = parser.parse_args()
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

