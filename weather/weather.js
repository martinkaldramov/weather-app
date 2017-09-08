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
        console.log('The temperature in Sofia now is: ' + Math.ceil((body.currently.temperature - 32) * .5556) + ' C');
      }
  });
}

module.exports.getWeather = getWeather;
