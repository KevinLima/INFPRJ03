class Data{
	constructor(){
		console.log(this.getData());
		// The folowing line is for the street data per year.
		//this.getData(2012);
	}

	getData()
	{
    	var req = new XMLHttpRequest();
    	req.open("GET", "http://member.kevinlima.com/topstreet.php", false);
    	req.send(null);
    	return JSON.parse(req.responseText);
	}
	getLatLong(loc)
	//This function parses the object retrieved from google geocoding api.
	{
    	return getGeocodeJSON(loc).results[0].geometry.location;
	}

	getGeocodeJSON(loc)
	//This function sends a request to google geocoding api.
	{
    	var loc = loc.replace(" ", "+");
    	var req = new XMLHttpRequest();
    	req.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&components=country:NL&key=AIzaSyAScKdVWqG-IWed2LPLkVDMxo_1cWjUny0",false);
    	req.send(null);
    	return JSON.parse(req.responseText); 
	}
}