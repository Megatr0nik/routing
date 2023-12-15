
// const { MongoClient } = require('mongodb');
const { checkUser } = require('./check-user.js');

// const client = new MongoClient('mongodb://localhost:27017/');

exports.regUser = async (data, client) => {
    try {
        // await client.connect();
        const db = client.db("data");
        const collection = db.collection('person');
        const userPresent = await collection.findOne({ email: data.email });

        if (userPresent) {
            console.log('The user is already registered...');
            return 'The user is already registered...';
        } else {
            console.log('Add new user...')
            await collection.insertOne(data);
            return await collection.findOne({ email: data.email });
        }
    } catch {
        console.error('Registration error...');
    } finally {
        console.log('"REGISTRATION", close connection...');
        // await client.close();
    }
}

exports.loginUser = async (loginData, client) => {
    try {
        const db = client.db("data");
        const collection = db.collection('person');
        const userPresent = await collection.findOne({ email: loginData.email });

        if (userPresent !== null) {
            return (checkUser(loginData, userPresent));

        } else {
            console.log('No user registered...');
            return 'No user registered...';
        }

    } catch {
        console.error('Login error...');
    } finally {
        console.log('"LOGIN", close connection...');
        // await client.close();
    }
}

exports.giveFriendsUser = async (data, client) => {

    try {
        const collection = client.db("data").collection("person");
        const option = {
            projection: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                avatar: 1,
                friends: 1,
                post: 1
            }
        }
        const arrData = await collection.find({ "email": { $in: data } }, option)
            .toArray((err, dat) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(dat);
                }
            });
        return arrData;
    } catch {
        console.error('Give friends error...');
        return [];
    } finally {
        console.log('Close connection...')
    }
}


