
const express = require('express');

const { regUser, loginUser, giveFriendsUser } = require('./services/dataBase.js');
const { readFileOnPath, writeFile } = require('./services/fs-worker.js');
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


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));


app.use(router);


app.options('*', (req, res) => {
    res.set(HEADERS);
    res.send('OK');
});

app.all('*', (req, res) => {

    const body = req.body;
    console.log('LOG =>|', req.body);
    res.set(HEADERS);
    res.send({ 'LOG...': body });

});


app.get('*/gallery', (req, res) => {
    res.set(HEADERS);
    const data = readFileOnPath(req.url);
    res.send(data);
});

app.post('/friends', (req, res) => {
    res.set(HEADERS);
    const data = giveFriendsUser(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});

app.listen(PORT, () => {
    console.log(`Server is run on http://${HOST}:${PORT}`);
});



