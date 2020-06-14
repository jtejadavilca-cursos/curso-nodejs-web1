const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    return texto
            .split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1) )
            .join(' ');
})