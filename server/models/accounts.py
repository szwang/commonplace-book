from app import db, login_manager
from .cp_book import User


@login_manager.user_loader
def load_account(user_id):
    return User.query.get(user_id)

def validate_registration(username, email):
    matching_email = User.query.filter_by(email=email).first()
    result = {}
    if matching_email:
        result['email'] = 'Account with e-mail already exists'

    matching_username = User.query.filter_by(username=username).first()
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
    return user  # Not turning to dictionary because of flask-login

def check_user_auth(password, email=None, username=None):
    if not (email or username):
        return 'Need to provide either username or email', False
    user = None
    if email:
        user = User.query.filter_by(email=email, password=password).first()
    if username:
        user = User.query.filter_by(username=username, password=password).first()
    if user:
        return user, True
    else:
        return None, False
