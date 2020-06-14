const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const PORT = process.env.PORT || 3000;
const NOMBRE = 'jose tejada';

app.use( express.static( __dirname + '/public') );

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/parciales' );



app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: NOMBRE
    });
});
app.get('/about', (req, res) => {
    
    res.render('about', {
        nombre: NOMBRE
    });
});
 
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});