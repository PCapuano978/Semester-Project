// This secondary JavaScript document (true to its name) is based more on the server side of the webpage's programming.

// It starts by having the site be ran through express (via node) by having it require these programs before processing anymore. 
const express = require('express')
const app = express()
var PORT = process.env.PORT||8080;


app.use(express.static("public"));

// My templenting engine of choice is also Handlebars, as it was familiar to me based off my past experiences with the Node project.
const hbs = require('express-handlebars')({
    defaultLayout: 'main',
    extname: '.hbs'
  });
  app.engine('hbs', hbs);
  app.set('view engine', 'hbs');

  // Here is where the index page in question is set to request and get data from the browser and render the code for the same page. 
  app.get("/", (request, response) => {
    response.render('index',  {
      title: "Patrick's Pokédex Plus",
    });
  });

  // As defined earlier up, the app will signal for a local host code of 8080, but the additional code here makes sure it's also Glitch compatible. 
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});