class Data{
	constructor()
	//The constructor initializes raw_data variable.
	{
		this.topstreet_data = this.getTopStreet(2012); //year argument is not necessary
	}

	getTopStreet(year)
	{
		var url = "http://member.kevinlima.com/topstreet.php";
		if(year != undefined)
		{
			url = "http://member.kevinlima.com/topstreet.php?year="+year;
		}
		var req = new XMLHttpRequest();
    	req.open("GET", url, false);
    	req.send(null);
    	return JSON.parse(req.responseText);
	}
}