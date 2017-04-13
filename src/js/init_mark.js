function init_mark() {
	// TODO: Make 'map' a variable
	var map = new google.maps.Map(document.getElementById('map'), {
		// Center point of map at initialization
		center: {
			// Coordinates of Rotterdam
			lat: 51.9279515, lng: 4.4203582
		},
		// Disables Google Maps default UI
		disableDefaultUI: true,
		
		zoom: 12,
		// Google Maps theme
		styles: [{
			"elementType": "geometry",
			"stylers": [{
					"color": "#1d2c4d"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8ec3b9"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1a3646"
			}]
		}, {
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#4b6878"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#64779e"
			}]
		}, {
			"featureType": "administrative.province",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#4b6878"
			}]
		}, {
			"featureType": "landscape.man_made",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#334e87"
			}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#023e58"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#283d6a"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#6f9ba5"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1d2c4d"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#023e58"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#3C7680"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#304a7d"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#98a5be"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1d2c4d"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#2c6675"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#255763"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#b0d5ce"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#023e58"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#98a5be"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#1d2c4d"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#283d6a"
			}]
		}, {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#3a4762"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#0e1626"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#4e6d70"
			}]
		}]
	});
// Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: locations,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

	  var locations = x.location_data;
	  /*
      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]
	  */

