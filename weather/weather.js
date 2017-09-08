const request = require('request');

var getWeather = (lat, lng, callback) => {
  
  request({
      url: `https://api.darksky.net/forecast/5ef948d7fff5094cb8f5607aef5afa12/${lat},${lng}`,
      json: true
    }, 
    (error, response, body) => {
      if(error){
        callback('Unable to connect to the Dark Sky server.');
      }else if(body.code === 400){
        callback('Bad Request');  
      }else{
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
  });
}

module.exports.getWeather = getWeather;
