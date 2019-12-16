const express = require('express')
const app = express()
var PORT = process.env.PORT||8080;


app.use(express.static("public"));

const hbs = require('express-handlebars')({
    defaultLayout: 'main',
    extname: '.hbs'
  });
  app.engine('hbs', hbs);
  app.set('view engine', 'hbs');

  app.get("/", (request, response) => {
    response.render('index',  {
      title: "Patrick's Pokémon Package",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});