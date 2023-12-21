
const dbUri = 'mongodb://localhost:27017/';
const onlineConStr = 'mongodb+srv://vasoshoni:shoni3birdie@birdie.tcqicss.mongodb.net/?retryWrites=true&w=majority';



const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(onlineConStr);


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