
const { MongoClient } = require('mongodb');

const URI = 'mongodb://localhost:27017/';

const client = new MongoClient(URI);

exports.regUser = async (data) => {

    console.log('REG', data);

    try {

        await client.connect();

        const db = client.db("data");
        const collection = db.collection('person');

        console.log(collection);

        if (data[0]) {
            const userPresent = await collection.findOne({ email: data.email });
            console.log('present', userPresent);
            if (!userPresent) {
                console.log('Add new user...')
                await collection.insertOne(data[1]);
                return await collection.findOne({ email: data.email });
            } else {
                console.log('This user present)');
                return 'This user present)';
            }
        } else {
            return await collection.findOne({ email: data.email });
        }

    } catch {
        console.error('error');
    } finally {
        console.log('close connection...');
        await client.close();
    }
}

exports.loginUser = async (data) => {
    try {
        await client.connect();
        const db = client.db("data");
        const collection = db.collection('person');

        const userPresent = await collection.findOne({ email: data.email });
        if (userPresent !== null) {

            return userPresent;
        } else {
            return 'No user register...';
        }

    } catch {
        console.error('error');
    } finally {
        console.log('close connection...');
        await client.close();
    }
}


// exports.regUser = regUser;