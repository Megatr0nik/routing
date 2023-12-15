


const multer = require('multer');
const express = require('express');
const { MongoClient } = require('mongodb');


const { regUser, loginUser, giveFriendsUser } = require('./services/dataBase.js');
const { readFileOnPath, writeFile } = require('./services/fs-worker.js');

const app = express();
const client = new MongoClient('mongodb://localhost:27017/');
const upload = 


const HOST = 'localhost';
const PORT = 8000;
const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Request-Method': '*'
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));

///////////////////OPTIONS////////////////////////
app.options('*', (req, res) => {
    res.set(HEADERS);
    res.send('OK');
});
///////////////////OPTIONS////////////////////////

app.get('*/gallery', (req, res) => {
    res.set(HEADERS);
    const data = readFileOnPath(req.url, client);
    res.send(data);
});

app.post('/friends', (req, res) => {
    res.set(HEADERS);
    const data = giveFriendsUser(req.body, client);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});
///////////////////FILE////////////////////////
app.post('*/avatar', (req, res) => {
    console.log(req.url)
    console.log(req.file)
    writeFile(req.body, req.url);
    res.set(HEADERS);
    res.send('Avatar add...');
})
///////////////////FILE////////////////////////

///////////////////REGISTRATION////////////////////////
app.post('/register', (req, res) => {
    res.set(HEADERS);
    // console.log(req.body)
    const data = regUser(req.body, client);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});
///////////////////REGISTRATION////////////////////////


///////////////////LOGIN////////////////////////
app.post('/login', (req, res) => {
    res.set(HEADERS);
    const data = loginUser(req.body, client);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});
///////////////////LOGIN////////////////////////

const start = async () => {
    try {

        await client.connect();

        app.listen(PORT, () => {
            console.log(`Server is run on http://${HOST}:${PORT}`);
        });
    } catch (err) {
        console.error(err);
        await client.close();
    }
}

start();

