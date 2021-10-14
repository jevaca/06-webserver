//levantar un webserver sin express

const http = require('http');

http.createServer( (req, res) => { //request: lo que estan solicitando, toda la info de la url, los headers, argumentos. La solicitud a mi web server está aqui response: Lo que voy a responder al cliente

    console.log(req);

    //res.writeHead(200, { 'Content-Type': 'text/plain' }); //regreso el status y especifico un content type para que se muestre como texto en el navegador
    //res.writeHead(200, { 'Content-Type': 'application/json' }); //regreso el status  y especifico un content type para que se muestre como texto en el navegador
    
    // const persona = {
    //     id: 1,
    //     nombre: 'Persona'
    // }
    //
    // res.write(JSON.stringify(persona));
    
    
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); //le especifico al navegador el nombre y extension del archivo a descargar
    res.writeHead(200, { 'Content-Type': 'application/csv' }); //regreso el status  y especifico un content type para que me descargue un archivo de excel

    res.write( 'id, nombre\n');
    res.write( '1, Fernando\n');
    res.write( '2, Maria\n');
    res.write( '3, Juan\n');

    res.end();

})
.listen( 8080 ); //puerto

console.log('Escuchando el puerto',8080);