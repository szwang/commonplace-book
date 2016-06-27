web: npm run dist && gunicorn --pythonpath server entry:app
server: gunicorn --pythonpath server entry:app
webpackdev: npm start
initdb: python server/initdb.py