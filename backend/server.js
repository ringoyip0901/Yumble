const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const keys = require('../keys.js')
const yelp = require('../node_modules/yelp-fusion')
const client = yelp.client(keys.API_Key)
const controller = require('./database/controller.js')
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/../index.html'))
})

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/search', controller.searchYelp)

app.listen(PORT, () => {
  console.log('server is now listening on PORT 3000')
})