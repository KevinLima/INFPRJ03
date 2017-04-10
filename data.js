class Data{
	constructor(){
		this.getData();
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
		    }
		})
	}
}