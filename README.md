#Commonplace Book

##Getting started

Clone the repo and cd into the file.

Configure .env:

```
touch .env
open .env
```

then paste the following:

```
PYTHONUNBUFFERED=true
NODE_ENV=development
GUNICORN_PARAMS=-c gunicorn.cfg
DATABASE_URL=postgresql://localhost
```

Install dependencies:

```
npm install

virtualenv venv

source venv/bin/activate

pip install -r requirements.txt
```

Start PostgreSQL service and create database tables:

```
heroku local initdb
```

Start local server:

```
heroku local web

open http://localhost:3001
```

For webpack dev server:

```
heroku local webpackdev
heroku local server
open http://localhost:3000
```

n.b. there may be Chrome console errors (`'//@ sourceURL' and '//@ sourceMappingURL' are deprecated, please use '//# sourceURL=' and '//# sourceMappingURL=' instead.`). 

Enter the following regex into the console filter to remove them:

```
^((?!sourceURL).)*$
```
