const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/index');
const path = require('path');
const { engine } = require('express-handlebars');

// route(app);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'));

app.use('/', route);

app.listen(port, () => console.log('localhost' + port));