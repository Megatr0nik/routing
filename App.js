
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');




const app = express();


const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Request-Method': '*'
}


app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('static'));

app.use('/api', router);







async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'));
        app.listen(config.get('PORT'), () => {
            console.log(`Server is run on http://${config.get('HOST')}:${config.get('PORT')}`);
        });
    } catch (error) {
        console.error(error);
    }
}
start();

