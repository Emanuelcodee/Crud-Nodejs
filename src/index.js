const express = require('express');
const morgan = require('morgan');
const pool = require('./settings/db');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs => ({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//MIIDDLEWARE
app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});