const mongoose = require('mongoose');

const uri = "mongodb+srv://db:8250498848@cluster0.rrt2feq.mongodb.net/velvet-date?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(uri);
        console.log('Successfully connected!');

        const dbName = mongoose.connection.db.databaseName;
        console.log('Connected to database:', dbName);

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Collections available:', collections.map(c => c.name));

    } catch (err) {
        console.error('Connection failed:', err.message);
    } finally {
        await mongoose.disconnect();
    }
}

test();
