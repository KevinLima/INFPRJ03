function GetLatLong(loc)
//This function parses the object retrieved from google geocoding api.
{
    return GetJSON(loc).results[0].geometry.location;
}

function GetJSON(loc)
//This function sends a request to google geocoding api.
{
    var loc = loc.replace(" ", "+");
    var req = new XMLHttpRequest();
    req.open("GET","https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&components=country:NL&key=AIzaSyAScKdVWqG-IWed2LPLkVDMxo_1cWjUny0",false);
    req.send(null);
    return JSON.parse(req.responseText); 
}