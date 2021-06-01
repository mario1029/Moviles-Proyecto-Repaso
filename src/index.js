const express = require('express');
const middlewares = require('./middlewares/middlewares');
const app = express();
const routes = require('./routes/index');

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middlewares);


app.get('/', (req, res)=>{
	res.send('hi, estas en el inicio');
})

app.use('/', routes);

module.exports = app;
