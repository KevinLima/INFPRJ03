
var map, heatmap, points;

function initMap() 
{
	initPoints();
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: {lat:  51.9244201, lng: 4.4777325},
		mapTypeId: 'satellite'
	});

	var interval2 = setInterval(()=>{
		if(points !== undefined)
		{
		heatmap = new google.maps.visualization.HeatmapLayer({
			data: points,
			map: map
		});
		clearInterval(interval2);
		}
	}, 100)
}

function toggleHeatmap() 
{
	heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() 
{
var gradient = 
		[
		'rgba(0, 255, 255, 0)',
		'rgba(0, 255, 255, 1)',
		'rgba(0, 191, 255, 1)',
		'rgba(0, 127, 255, 1)',
		'rgba(0, 63, 255, 1)',
		'rgba(0, 0, 255, 1)',
		'rgba(0, 0, 223, 1)',
		'rgba(0, 0, 191, 1)',
		'rgba(0, 0, 159, 1)',
		'rgba(0, 0, 127, 1)',
		'rgba(63, 0, 91, 1)',
		'rgba(127, 0, 63, 1)',
		'rgba(191, 0, 31, 1)',
		'rgba(255, 0, 0, 1)'
		];
	heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() 
{
	heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() 
{
	heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
function initPoints()
{
	var interval = setInterval(()=>{
		if (dc.location_data !== undefined)
		{
			var lst = []
			for (var i = 0; i < dc.location_data.length; i++)
			{
			lst.push(new google.maps.LatLng(dc.location_data[i].lat, dc.location_data[i].lng))
			}
			points = lst;
			clearInterval(interval);
		}
	}, 100);
}

function reload(year)
{
	points = undefined;
	dc.location_data = undefined;
	year !== undefined ? dc.initLocationData(year) : dc.initLocationData()
	initMap();
}