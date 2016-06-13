from app import db, login_manager
from .cp_book import User
import bcrypt

@login_manager.user_loader
def load_account(user_id):
  return User.query.get(user_id)

def validate_registration(username, email):
  matching_email = User.query.filter_by(email=email).first()
  print 'matching email', matching_email
  result = {}
  if matching_email:
    result['email'] = 'Account with e-mail already exists'

  matching_username = User.query.filter_by(username=username).first()
  print 'matching username', matching_username
  if matching_username:
    result['username'] = 'Account with username already exists'

  if matching_email or matching_username:
    return result, False

  return 'Valid registration', True

def register_user(username, email, password):
  user = User(
    username=username,
    email=email,
    password=password
  )
  db.session.add(user)
  db.session.commit()
  return user  

def check_user_auth(password, username=None):
  print 'in check user auth', password, username
  if not (username):
    return 'Need to provide username', False
  if username:
    user = User.query.filter_by(username=username).first()
    print 'found user'
  if user:
    if bcrypt.hashpw(password, user.password.encode('utf-8')).decode() == user.password:
      print 'password matches'
      return user, True 
       
  return None, False
