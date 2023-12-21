
const dbUri = 'mongodb://localhost:27017/';

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(dbUri);


exports.clientDataBase = async () => {

    try {
        const conn = await client.connect();


        console.log('DataBase connected...');
        return conn;

    } catch (err) {
        await client.close();
        console.log('DataBase error, close connection...');
        console.log(err);
    }
}