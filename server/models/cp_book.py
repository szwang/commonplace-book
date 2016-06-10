# -*- coding: utf-8 -*-
from datetime import datetime
import uuid

from app import db

def make_uuid():
    return unicode(uuid.uuid4())

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.Unicode(60), unique=True)
  email = db.Column(db.Unicode(100), unique=True)
  password = db.Column(db.Unicode(120))
  
  active = db.Column(db.Boolean(), default=True)
  authenticated = db.Column(db.Boolean(), default=True)
  anonymous = db.Column(db.Boolean(), default=False)
  active = db.Column(db.Boolean(), default=True)

  notes = db.relationship("Note")

  def __init__(self, username='', name='', email='', password='', role=''):
      self.api_key = make_uuid()
      self.username = username
      self.email = email
      self.password = password
      self.role = role

  # def is_admin(self):
  #     return (self.role == Role.ADMIN.value)

  def is_authenticated(self):
      return self.authenticated

  def is_anonymous(self):
      return self.anonymous

  def is_active(self):
      return self.active

  def get_id(self):
      return unicode(self.id)

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
