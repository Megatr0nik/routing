

const { getAvatar } = require('./services/sendFile.js');
const { regUser, loginUser, giveData } = require('./services/dataBase.js');
// const img = './static/avatars/269312438.png';

const express = require('express');
const { giveFriends } = require('./services/check-user.js');
const { readFileOnPath } = require('./services/fs-worker.js');
const app = express();

const host = 'localhost';
const port = 8000;
const headers = {
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
    res.set(headers);
    res.send('OK');
});
///////////////////OPTIONS////////////////////////


// app.get('/avatars', (req, res) => {
//     console.log('GET', req.body);
//     console.log('GET', req.url);
//     console.log();
//     res.send();
// });

app.get('*/gallery', (req, res) => {
    res.set(headers);
    const data = readFileOnPath(req.url);
    res.send(data);
});

app.post('/friends', (req, res) => {
    res.set(headers);
    const data = giveData(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});


///////////////////REGISTRATION////////////////////////
app.post('/register', (req, res) => {
    res.set(headers);
    const data = regUser(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});
///////////////////REGISTRATION////////////////////////


///////////////////LOGIN////////////////////////
app.post('/login', (req, res) => {
    res.set(headers);
    const data = loginUser(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});
///////////////////LOGIN////////////////////////




app.listen(port, () => {
    console.log(`Server is run on http://${host}:${port}`);
});