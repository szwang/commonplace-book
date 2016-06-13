<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      body {
        overflow: auto;
        font-family: 'Open Sans', sans-serif;
      }
      .root {
        width: 100%;
        height: 100%;
      }
    </style>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300italic' rel='stylesheet' type='text/css'>
    <title><%= htmlWebpackPlugin.options.title || 'Commonplace Book' %></title>
  </head>
  <body>
    <div class="root" id="root"></div>
  </body>
</html>
