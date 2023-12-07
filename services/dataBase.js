
const { MongoClient } = require('mongodb');
const { checkUser } = require('./index.js');

const URI = 'mongodb://localhost:27017/';

const client = new MongoClient(URI);

exports.regUser = async (data) => {

    try {

        await client.connect();

        const db = client.db("data");
        const collection = db.collection('person');

        // refactoring
        if (data[0]) {

            const userPresent = await collection.findOne({ email: data[1].email });
            if (!userPresent) {
                console.log('Add new user...')
                await collection.insertOne(data[1]);
                return [false, await collection.findOne({ email: data[1].email })];
            } else {
                console.log('This user present)');
                return [true, 'This user present)'];
            }
        } else { // Нахера воно?)))
            console.log('login...?');
            return await collection.findOne({ email: data[1].email });
        }

    } catch {
        console.error('error');
    } finally {
        console.log('close connection...');
        await client.close();
    }
}

exports.loginUser = async (loginData) => {
    try {
        await client.connect();
        const db = client.db("data");
        const collection = db.collection('person');
        const userPresent = await collection.findOne({ email: loginData[1].email });

        if (userPresent !== null) {
            return (checkUser(loginData[1], userPresent));

        } else {
            console.log('No user register...');
            return [false, 'No user register...'];
        }

    } catch {
        console.error('Login error...');
    } finally {
        console.log('close connection...');
        await client.close();
    }
}

exports.giveData = async (data) => {
    const arr = [];

    client.connect();
    const db = client.db("data");
    const collection = db.collection("person");



    const mongoFind = async (e) => {
        try {
            client.connect();
            const db = client.db("data");
            const collection = db.collection("person");
            const data = await collection.findOne({ email: e })
                .then(d => d ? arr.push(d) : null);
        } catch {
            console.error('Give friends error');
        } finally {
            client.close();
        }
    }

    for (i = 0; i < data.length; i++) {
        await mongoFind(data[i]);
    }

    return arr;
}