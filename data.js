class Data{
	constructor(){
		this.getData();

		// The folowing line is for the street data per year.
		//this.getData(2012);
	}

	getData(){
		var request = require("request")

		var url = "http://member.kevinlima.com/topstreet.php"

		request({
		    url: url,
		    json: true
		}, function (error, response, body) {

		    if (!error && response.statusCode === 200) {
		        //console.log(body) // Print the json response
		        // TODO: Create logic that uses the data 
		    }
		})
	}
	getData(year){
		var request = require("request")

		var url = "http://member.kevinlima.com/topstreet.php?year="+year;

		request({
		    url: url,
		    json: true
		}, function (error, response, body) {

		    if (!error && response.statusCode === 200) {
		        //console.log(body) // Print the json response
		        // TODO: Create logic that uses the data 
		    }
		})
	}
	GetLatLong(loc)
	//This function parses the object retrieved from google geocoding api.
	{
    	return GetJSON(loc).results[0].geometry.location;
	}

	GetJSON(loc)
	//This function sends a request to google geocoding api.
	{
    	var loc = loc.replace(" ", "+");
    	var req = new XMLHttpRequest();
    	req.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&components=country:NL&key=AIzaSyAScKdVWqG-IWed2LPLkVDMxo_1cWjUny0",false);
    	req.send(null);
    	return JSON.parse(req.responseText); 
	}
}