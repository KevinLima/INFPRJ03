class Data{
	constructor()
	//The constructor initializes topstreet_data variable.
	{
		this.topstreet_data = this.getTopStreet();
	}


	getTopStreet()
	//This method requests and returns data concerning bicycle thefts and street coordinates.
	{
    	var req = new XMLHttpRequest();
    	req.open("GET", "http://member.kevinlima.com/topstreet.php", false);
    	req.send(null);
    	return JSON.parse(req.responseText);
	}
}