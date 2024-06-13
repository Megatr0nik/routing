
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const morgan = require('morgan');

const router = require('./routes/index.js');
const config = require('config');

const app = express();


app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('static'));

app.use('/api', router);


async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'));
        app.listen(config.get('PORT'), () => {
            console.log(`Server is run on http://${config.get('HOST')}:${config.get('PORT')}`);
        });
    } catch (error) {
        console.error(error);
    }
}
start();

