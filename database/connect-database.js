const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const DATABASE_URI=  'mongodb://localhost/moleculer-db';
function connectDatabase() {
    return mongoose.connect(DATABASE_URI, { 
        // useMongoClient: true, 
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        promiseLibrary: global.Promise 
    })
    .then(() => console.log(`DATABASE CONNECTED SUCCESSFULLY TO ${DATABASE_URI}.`))
    .catch(error => (console.log(error), process.exit(1)));
}

module.exports = {
    connectDatabase
}