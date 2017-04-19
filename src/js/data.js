class Data
{
	constructor()
	//Initializes data class.
	{
		this.topstreet_data = [];
		this.topbike_data = [];
		this.initTopStreetData();
		this.initTopBikeData();
		this.initLocationData();
	}

	initLocationData(year)
	// creates a list of coordinates and returns the list
	{
		var index = 0;
		if (year !== undefined)
		{
			if (year <= 2013 && year >= 2011)
			{
				index = 2014 - year;
			}
		}
		var interval = setInterval(()=>{
			if(this.topstreet_data[index] !== undefined)
			{
				var result = [];
				for(var j = 0; j < this.topstreet_data[index].length; j++)
				{
					for(var k = 0; k < this.topstreet_data[index][j]["Count"]; k++)
					{
						result.push({lat:parseFloat(this.topstreet_data[index][j]['Latitude']), lng:parseFloat(this.topstreet_data[index][j]['Longitude'])});
					}
				}
				this.location_data = result;
				clearInterval(interval);
			}
		}, 100);
	}

	initTopStreetData(year)
	//Requests top street data from the database and creates a list using recurstion.
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

	initTopBikeData(year)
	//Requests top bike brand data from the database and creates a list using recursion.
	{
		var url = "http://member.kevinlima.com/topbike.php";
		if(year !== undefined)
		{
			url = "http://member.kevinlima.com/topbike.php?year="+year;
		}
		if(year === undefined)
		{
			fetch(url, {method:"GET"}).then((response)=>{
				return response.json();
			}).then((json)=>{
				this.topbike_data.push(json);
			}).then(()=>{this.initTopBikeData(2011)})
		}
		else if (year <= 2013 && year >= 2011)
		{
			fetch(url, {method:"GET"}).then((response)=>{
				return response.json();
			}).then((json)=>{
				this.topbike_data.push(json);
			}).then(()=>{this.initTopBikeData(year+1);});
		}
	}
}
dc = new Data(); //dc = dataconnection