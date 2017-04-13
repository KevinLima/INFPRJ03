class Data{
	constructor()
	//The constructor initializes raw_data variable.
	{
		this.topstreet_data = [this.getTopStreet(), this.getTopStreet(2011), this.getTopStreet(2012), this.getTopStreet(2013)]
		this.location_data = this.getLocationData();	
	}

	getLocationData()
	{
		var result = [];
		for (var i = 0; i < 4; i++)
		{
			for(var j = 0; j < this.topstreet_data[i].length; j++)
			{
				for(var k = 0; k < this.topstreet_data[i][j]["Count"]; k++)
				{
					result.push({lat:this.topstreet_data[i][j]['Latitude'], long:this.topstreet_data[i][j]['Latitude']})
				}
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