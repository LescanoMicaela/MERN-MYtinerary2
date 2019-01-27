const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser');
//this is the port where our server will work on
const port =  8080;




//tells the system that you want json to be used.
app.use(bodyParser.json());
// true : allows us to use complex algorithm for deep parsing that can deal with nested objects
app.use(bodyParser.urlencoded({extended: true}));

var ObjectID = require('mongodb').ObjectID; // we will use this later

MongoClient.connect('mongodb://MicaelaLescano:MYtinerary321@ds115854.mlab.com:15854/mytinerary',{ useNewUrlParser: true }, (err, db) => {
//save db in var dbase name of db inside ("") 
var dbase = db.db("mytinerary");
    if (err) return console.log(err)
      app.listen(port, () => {
        console.log(`Listening on port ${port}`)
      })
      
      //post method to add cities to data base
      app.post('/cities/add', (req, res, next) => {
        
        // body(keys and values) that'd be sent to the collection
        var city = {
          name: req.body.name,
          country: req.body.country
        };
        // name of collection
        dbase.collection("cities").insertOne(city, (err, result) => {
          if(err) {
            console.log(err);
          }
    
          res.send('city added successfully');
        });
      });
    //methods returns a list of all the elements in the collection
    app.get('/api/cities', (req, res) => {
      dbase.collection('cities').find().toArray( (err, results) => {
        res.send(results)
        });
    });

    app.get('/api/cities/:city',(req,res) => {
      let city = req.params.city;
      console.log('The city: ' + city);
      dbase.collection('cities').find().toArray( (err, results) => {
        let result = results.filter(el => el.name.toLowerCase() == city.toLowerCase())
        res.send(result)
        });
    });
    
    app.get('/api/itineraries/',(req,res) => {
      dbase.collection('itineraries').find().toArray( (err, results) => {
        res.send(results)
        });
    });

    app.get('/api/itineraries/:city',(req,res) => {
      let city = req.params.city;
      console.log('The city: ' + city);
      dbase.collection('itineraries').find().toArray( (err, results) => {
        let result = results.filter(el => el.ref.includes(city.toLowerCase()))
        res.send(result)
        });
    });
    

  });


app.get('/', (req,res)=>{
  res.send('Its working');
})


