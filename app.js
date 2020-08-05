const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const userRoutes = require('./routes/user-routes');

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(userRoutes);
app.listen(port);