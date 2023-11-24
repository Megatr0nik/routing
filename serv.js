


const http = require('http');
const { checkUser } = require('./services/index.js');
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

    if (request.method === 'OPTIONS') {

        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.end('Hello')
    } else {
        request.on('data', (data) => {

            dataRecive += data;
        }).on('end', () => {

            response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            response.setHeader('Access-Control-Allow-Headers', '*');
            response.write(JSON.stringify(checkUser(dataRecive)));
            response.end();
        });
    }


}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is run on http://${host}:${port}`)
});