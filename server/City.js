
//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://MicaelaLescano:MYtinerary321@ds115854.mlab.com:15854/mytinerary';
mongoose.connect(mongoDB,{ useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Define a schema
const Schema = mongoose.Schema;

let citySchema = new Schema({
    name: name,
    country: country
});

module.exports = citySchema;