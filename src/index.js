const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("jelo")

app.get('/', (req, res)=>{
	res.send('hi');
})

module.exports = app;
