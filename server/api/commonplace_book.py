# -*- coding: utf-8 -*-
from flask import request, Blueprint
from flask_restful import Api, Resource, reqparse
from models import Note, User, Tag

cp_book_api = Api(Blueprint('cp_book_api', __name__)) 

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

    new_note = Note()
    db.session.add(new_note)
    db.session.commit()

    return {
      'id': new_note.id,
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

