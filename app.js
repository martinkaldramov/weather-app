const request = require('request');
const yargs = require('yargs');

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
const encodedAddress = decodeURIComponent(argv.a);

console.log(argv);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    console.log(`The Formatted Address is: ${body.results[0].formatted_address}`);
    console.log(`The LAT is: ${body.results[0].geometry.location.lat}`);
    console.log(`The LNG is: ${body.results[0].geometry.location.lng}`);
  });
