web: npm run dist && gunicorn -b 127.0.0.1:3001 --pythonpath server entry:app
server: gunicorn --pythonpath server entry:app
webpackdev: npm start
initdb: python server/initdb.py