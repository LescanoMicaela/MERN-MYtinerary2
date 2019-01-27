const mongoose = require('mongoose');

mongoose.connect('mongodb://MicaelaLescano:MYtinerary321@ds115854.mlab.com:15854/mytinerary');
const Schema = mongoose.Schema;


const itinerarySchema = new Schema ({
   ref: Array,
   author: Mixed,
   hashtags: Array,
   details: Mixed 
})