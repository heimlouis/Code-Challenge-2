const express = require( 'express' );
const app = express();
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
// const jokeRouter = require('./routes/joke.router');//***** this needs to be fixed

const port = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/jokes', jokeRouter); //****** this needs to be fixed

// serve back static files
app.use(express.static('server/public'));

app.listen(port, function(){
  console.log('server running on: ', port);
}); // end spin up server
