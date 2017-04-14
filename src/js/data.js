class Data
{
	//TODO: implement topbikes_data

	constructor()
	{
		//this.topstreet_data = [this.getTopStreet(), this.getTopStreet(2011), this.getTopStreet(2012), this.getTopStreet(2013)];
		//this.location_data = this.getLocationData();
		this.topstreet_data = [];
		this.initTopStreetData();
		this.initLocationData();
	}

	initLocationData()
	// creates a list of coordinates and returns the list
	{
		var interval = setInterval(()=>{
			if(this.topstreet_data[0] !== undefined)
			{
				var result = [];
				for(var j = 0; j < this.topstreet_data[0].length; j++)
				{
					for(var k = 0; k < this.topstreet_data[0][j]["Count"]; k++)
					{
						result.push({lat:parseFloat(this.topstreet_data[0][j]['Latitude']), lng:parseFloat(this.topstreet_data[0][j]['Longitude'])});
					}
				}
				this.location_data = result;
				clearInterval(interval);
			}
		}, 100);
	}

	initTopStreetData(year)
	{
		var url = "http://member.kevinlima.com/topstreet.php";
		if(year !== undefined)
		{
			url = "http://member.kevinlima.com/topstreet.php?year="+year;
		}
		if(year === undefined)
		{
			fetch(url, {method:"GET"}).then((response)=>{
				return response.json();
			}).then((json)=>{
				this.topstreet_data.push(json);
			}).then(()=>{this.initTopStreetData(2011)})
		}
		else if (year <= 2013 && year >= 2011)
		{
			fetch(url, {method:"GET"}).then((response)=>{
				return response.json();
			}).then((json)=>{
				this.topstreet_data.push(json);
			}).then(()=>{this.initTopStreetData(year+1);});
		}
	}
}
dc = new Data(); //dc = dataconnection