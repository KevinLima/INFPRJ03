class Data{
	constructor(){
		this.getData();

		// The folowing line is for the street data per year.
		//this.getData(2012);
	}

	getData(){
		var request = require("request")

		var url = "http://member.kevinlima.com/change.php"

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
		console.log(year);
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
}