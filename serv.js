

const { getAvatar } = require('./services/sendFile.js');
const { regUser, loginUser, giveData } = require('./services/dataBase.js');
// const img = './static/avatars/269312438.png';

const express = require('express');
const { giveFriends } = require('./services/index.js');
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

app.options('*', (req, res) => {
    res.set(headers);
    res.send('OK');
});

app.post('/friends', (req, res) => {
    console.log(req.body)
    res.set(headers);
    const data = giveData(req.body);
    data.then(d => {
        console.log('FRIENDS', d);
        res.send(d);
    }).catch(err => console.log(err));

});

app.post('/person', (req, res) => {
    res.set(headers);
    const data = regUser(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});

app.post('/login', (req, res) => {
    res.set(headers);
    const data = loginUser(req.body);
    data.then(d => {
        res.send(d);
    }).catch(err => console.log(err));
});





app.listen(port, () => {
    console.log(`Server is run on http://${host}:${port}`);
});


// const requestListener = async (request, response) => {

//     let dataRecive = '';

//     console.log(request.url);
//     console.log(url.parse(request.url))


//     if (request.method === 'OPTIONS') {
//         response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//         response.setHeader('Access-Control-Allow-Headers', '*');
//         response.end('Hello')
//     }

//     if (request.method === 'POST') {
//         request.on('data', (data) => {

//             dataRecive += data;
//         })
//             .on('end', () => {
//                 console.log('data ', dataRecive);
//                 if (request.url === '/userdb/') {
//                     response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//                     response.setHeader('Access-Control-Allow-Headers', '*');
//                     response.write(JSON.stringify(giveFriends(dataRecive)));
//                     response.end();
//                 } else {
//                     response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//                     response.setHeader('Access-Control-Allow-Headers', '*');
//                     response.write(JSON.stringify(checkUser(dataRecive)));
//                     response.end();
//                 }


//             });
//     }

//     if (request.method === 'GET') {

//         console.log(request.url);

//         response.setHeader("Content-Type", "image/png");
//         fs.readFile('.' + request.url, (err, image) => {
//             response.end(image)
//         });
//     }
// }


// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is run on http://${host}:${port}`)
// });