
const { MongoClient } = require('mongodb');
const { checkUser } = require('./check-user.js');

const URI = 'mongodb://localhost:27017/';

const client = new MongoClient(URI);

exports.regUser = async (data) => {

    try {
        await client.connect();

        const db = client.db("data");
        const collection = db.collection('person');

        // refactoring
        if (true) {

            const userPresent = await collection.findOne({ email: data.email });

            if (!userPresent) {
                console.log('Add new user...')
                await collection.insertOne(data);
                return await collection.findOne({ email: data.email });
            } else {
                console.log('This user present)');
                return 'The user is already registered...';
            }
        }
        // else { // Нахера воно?)))
        //     console.log('login...?');
        //     return await collection.findOne({ email: data[1].email });
        // }

    } catch {
        console.error('Registration error');
    } finally {
        console.log('Registration, close connection...');
        await client.close();
    }
}

exports.loginUser = async (loginData) => {
    try {
        await client.connect();
        const db = client.db("data");
        const collection = db.collection('person');
        const userPresent = await collection.findOne({ email: loginData.email });

        if (userPresent !== null) {
            return (checkUser(loginData, userPresent));

        } else {
            console.log('No user register...');
            return 'No user register...';
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
    // console.log('Mongo find', data[0])

    try {
        client.connect();
        const db = client.db("data");
        const collection = db.collection("person");
        await collection.findOne({ email: data[0] })
            .then(d => d ?
                arr.push({
                    _id: d._id,
                    email: d.email,
                    firstName: d.firstName,
                    lastName: d.lastName,
                    avatar: d.avatar,
                    post: d.post
                }) :
                null);
    } catch {
        console.error('Give friends error...');
    } finally {
        console.log('Close connection...')
        client.close();
    }

    // console.log('ARR', arr);
    return arr;
}