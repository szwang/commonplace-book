# -*- coding: utf-8 -*-
from datetime import datetime

from app import db

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.Unicode(60), unique=True)
  email = db.Column(db.Unicode(100), unique=True)
  password = db.Column(db.Unicode(120))
  active = db.Column(db.Boolean(), default=True)

  notes = db.relationship("Note")

  def is_active(self):
    return self.active

tag_note = db.Table('tags_notes',
  db.Column('tag_id', db.Integer, db.ForeignKey('tags.id')),
  db.Column('note_id', db.Integer, db.ForeignKey('notes.id'))
)

class Note(db.Model):
  __tablename__ = 'notes'

  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.Unicode(2000))
  category = db.Column(db.Unicode(120))
  source = db.Column(db.Unicode(120))
  created_at = db.Column(db.DateTime, default=datetime.utcnow)
  
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

class Tag(db.Model):
  __tablename__ = 'tags'

  id = db.Column(db.Integer, primary_key=True)
  tag_name = db.Column(db.Unicode(120))
