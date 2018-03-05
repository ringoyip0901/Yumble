const keys = require('../../keys.js')
const yelp = require('../../node_modules/yelp-fusion')
const client = yelp.client(keys.API_Key)
const controller = {};

controller.searchYelp = (req, res, next) => {
  if (!req.body) {
    res.status(404).send("Error")
  }
  else {
    let body = req.body
    const searchRequest = {
      term: body.term, 
      location: body.location
    };
    client.search({
      term: searchRequest.term, 
      location: searchRequest.location
    }).then((response) => {
      let data = response.jsonBody.businesses
      res.send(data)
    }).catch(e => {
      console.log(e);
    })
  }
}

module.exports = controller;