//se utiliza express porque agiliza el proceso de levantar un webserver o una api, sobre todo cuando trabajamos con rutas.

const express = require('express')
const app = express();
const port = 3000;

//para servir contenido estatico 

app.use( express.static('public') ); //middlerware. Para que tome por defecto la página de inicio, esta se debe llamar index.html

//a diferencia de http.createServer (el método propio de javascript), express por defecto no permite acceder a rutas que no están definidas y atrapa la excepcion colocando un mensaje diciendo que la ruta no se puede acceder a la ruta

// app.get('/', (req, res) => { //podemos comentar esta linea debido a que estamos utilizando app.use para mostrar el index, por lo tanto este get nunca se va a ejecutar
//   res.send('Home Page') //mostrar en la pantalla del navegaodr (no consola)
// })

app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo en su respectiva ruta') //mostrar en la pantalla del navegaodr (no consola)
    res.sendFile( __dirname + '/public/hola-mundo.html');
})

app.get('*', (req, res) => {  //con * podemos especificar cualquier otra ruta que no sea las especificadas anteriormente, incluyendo las sub-rutas
  //res.send('404 | Page Not Found') //mostrar en la pantalla del navegaodr (no consola)
  res.sendFile( __dirname + '/public/404.html');
})
 
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)

});