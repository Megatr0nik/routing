


const http = require('http');
const fs = require('fs');

const { checkUser, giveFriends } = require('./services/index.js');
// const fs = require('fs');
// const routing = require('./index');

const host = 'localhost';
const port = 8000;
// const headers = {
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Headers': '*'
// }

const requestListener = async (request, response) => {

    let dataRecive = '';

    console.log(request.url);


    if (request.method === 'OPTIONS') {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.end('Hello')
    }

    if (request.method === 'POST') {
        request.on('data', (data) => {

            dataRecive += data;
        })
            .on('end', () => {
                console.log('data ', dataRecive);
                if (request.url === '/userdb/') {
                    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                    response.setHeader('Access-Control-Allow-Headers', '*');
                    response.write(JSON.stringify(giveFriends(dataRecive)));
                    response.end();
                } else {
                    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                    response.setHeader('Access-Control-Allow-Headers', '*');
                    response.write(JSON.stringify(checkUser(dataRecive)));
                    response.end();
                }


            });
    }

    if (request.method === 'GET') {

        console.log(request.url);

        response.setHeader("Content-Type", "image/png");
        fs.readFile('.' + request.url, (err, image) => {
            response.end(image)
        });
    }
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is run on http://${host}:${port}`)
});