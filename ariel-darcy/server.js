'use strict';

const express = require('express')

const app = express()

// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// COMMENTED: Our files are in a directory called public due to convention.  The following method tells express to serve these files in the directory ./public.
app.use(express.static('./public'))

// Create a route and callback that will serve up the new.html page via a seperate URL.
app.get('/newpost', (request, response) => {
  response.sendFile('new.html', {root: './public'})
})

app.use((request, response) => {
  response.status(404).send('404 Not Found')
})

app.post('/articles', bodyParser, function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => {
  console.log('listening on ' + PORT)
})