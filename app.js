const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }  
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);  
  }else{
    console.log(results.address);

    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);  
      }else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    });
  }
}); 

// Math.ceil((body.currently.temperature - 32) * .5556)
// 5ef948d7fff5094cb8f5607aef5afa12
