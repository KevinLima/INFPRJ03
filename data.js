class Data{
	constructor()
	{
		console.log(this.getData());
		// The folowing line is for the street data per year.
		//this.getData(2012);
	}

	getData()
	//this method requests and returns data concerning bicycle thefts.
	{
    	var req = new XMLHttpRequest();
    	req.open("GET", "http://member.kevinlima.com/topstreet.php", false);
    	req.send(null);
    	return JSON.parse(req.responseText);
	}
	getLatLong(loc)
	//This method parses the object retrieved from google geocoding api.
	//NOTE: google geocoding api is not made to process +- 2000 locations (alternative solution must be found)
	{
    	return getGeocodeJSON(loc).results[0].geometry.location;
	}

	getGeocodeJSON(loc)
	//This method sends a request to google geocoding api.
	//NOTE: google geocoding api is not made to process +- 2000 locations (alternative solution must be found)
	{
    	var loc = loc.replace(" ", "+");
    	var req = new XMLHttpRequest();
    	req.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&components=country:NL&key=AIzaSyAScKdVWqG-IWed2LPLkVDMxo_1cWjUny0",false);
    	req.send(null);
    	return JSON.parse(req.responseText); 
	}
}