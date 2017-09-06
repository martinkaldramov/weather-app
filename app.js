// const request = require('request');
// const yargs = require('yargs');
// 
// const geocode = require('./geocode/geocode');
// 
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for",
//       string: true
//     }  
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
// 
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);  
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// }); 

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/5ef948d7fff5094cb8f5607aef5afa12/42.6977082,23.3218675',
    json: true
  }, 
  (error, response, body) => {
    if(error){
      console.log('Unable to connect to the Dark Sky server.');
    }else if(body.code === 400){
      console.log('Bad Request');  
    }else{
      console.log(Math.ceil((body.currently.temperature - 32) * .5556));
    }
});

