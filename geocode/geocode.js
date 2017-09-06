const request = require('request');

var geocodeAddress = (address) => {
	const encodedAddress = decodeURIComponent(address);
	 
	request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if(error){
				console.log('Unable to connect to the Google servers.');  
			}else if(body.status === 'ZERO_RESULTS'){
				console.log('Unable to find the address.');
			}else if(body.status === 'OK'){
				console.log(`The Formatted Address is: ${body.results[0].formatted_address}`);
				console.log(`The LAT is: ${body.results[0].geometry.location.lat}`);
				console.log(`The LNG is: ${body.results[0].geometry.location.lng}`);
			}
		});
};

module.exports.geocodeAddress = geocodeAddress;
