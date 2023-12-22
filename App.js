
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');

const app = express();

const HOST = 'localhost';
const PORT = 8000;
const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Request-Method': '*'
}


app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));
app.use(router);


app.options('*', (req, res) => {
    res.set(HEADERS);
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is run on http://${HOST}:${PORT}`);
});



