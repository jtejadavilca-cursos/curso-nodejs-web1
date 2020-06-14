const http = require('http');
const PORT = 8080;
http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type' : 'application/json'});

    let salida = {
        nombre: 'Jose',
        edad: 36,
        url: req.url
    };

    res.write( JSON.stringify(salida) );

    res.end();
})
.listen(PORT);

console.log(`Escuchando desde el puerto ${PORT}`);