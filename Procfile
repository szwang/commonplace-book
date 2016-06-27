web: npm run dist && python server/entry.py
server: gunicorn --pythonpath server entry:app
webpackdev: npm start
initdb: python server/initdb.py