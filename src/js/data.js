class Data{
	//TODO: implement topbikes_data

	constructor()
	//The constructor initializes raw_data variable.
	//If you wish to use a certain year, the following formula applies: 
	//										this.topstreet_data[year][index][variablename] (E.g. this.topstreet_data[0][200]['Street'])
	// 										(year -> 0:sum of all years, 1:2011, 2:2012, 3:2013)
	{
		this.topstreet_data = [this.getTopStreet(), this.getTopStreet(2011), this.getTopStreet(2012), this.getTopStreet(2013)]
		this.location_data = this.getLocationData();
	}

	getLocationData()
	// creates a list of coordinates and returns the list
	{
		var result = [];
		for(var j = 0; j < this.topstreet_data[0].length; j++)
		{
			for(var k = 0; k < this.topstreet_data[0][j]["Count"]; k++)
			{
				result.push({lat:parseFloat(this.topstreet_data[0][j]['Latitude']), lng:parseFloat(this.topstreet_data[0][j]['Longitude'])})
			}
		}
		return result;
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