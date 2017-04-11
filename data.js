class Data{
	constructor()
	{
		// The folowing line is for the street data per year.
		//this.getData(2012);
		this.raw_data = this.getData();
	}

	/*
	NOTE: 2000 requests take too long, alternative solution must be found

	getData()
	//this method requests and returns data concerning bicycle thefts.
	{
    	var req = new XMLHttpRequest();
    	req.open("GET", "http://member.kevinlima.com/topstreet.php", false);
    	req.send(null);
    	return JSON.parse(req.responseText);
	}
	

	getGeocodeJSON(loc)
	//This method sends a request to google geocoding api.
	{
    	var loc = loc.replace(" ", "+");
    	var req = new XMLHttpRequest();
    	req.open("GET","http://nominatim.openstreetmap.org/search?q="+loc+",+rotterdam&format=json",false);
    	req.send(null);
    	return JSON.parse(req.responseText)[0]; 
	}
	*/
}