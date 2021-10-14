const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs'); //especificamos que vamos a trabajar con handlebars, cuando trabajamos con handlebars las vistas deben ir en una carpeta llamada views
hbs.registerPartials(__dirname + '/views/partials');

//Express
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jonathan Vaca',
        titulo: 'Software Engineer'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jonathan Vaca',
        titulo: 'Software Engineer'
    });
})

  
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jonathan Vaca',
        titulo: 'Software Engineer'
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})