<?php  
if(isset($_GET['year']) == true){
	$filterYear = htmlspecialchars($_GET['year']);
}


// Create  a connection
	// NOTE: this is not the real credentials of the DB
$con=mysqli_connect("localhost","USERNAME","PASSWORD","DBNAME");

// Check the connection

if (mysqli_connect_errno())

{

  echo "Failed to connect to MySQL: " . mysqli_connect_error();

}

// The SQL query that needs to be excuted 
	// W/o a filter for year

$sql = "SELECT THEFTS.Straat, COUNT(*) as Count, COORDINATES.Latitude, COORDINATES.Longitude
FROM THEFTS
LEFT JOIN COORDINATES ON THEFTS.Straat = COORDINATES.Street
GROUP BY Straat 
ORDER BY count DESC";

// This SQL query is excuted when there's a year provided (in the url)
if(isset($filterYear) == true){
	$sql = "SELECT THEFTS.Straat,COUNT(*) as Count, COORDINATES.Latitude, COORDINATES.Longitude
FROM THEFTS
LEFT JOIN COORDINATES ON THEFTS.Straat = COORDINATES.Street
WHERE THEFTS.`Gemiddelde jaar` = ".$filterYear."
GROUP BY Straat 
ORDER BY count DESC";
}

// Check if there are results

if ($result = mysqli_query($con, $sql))

{
	// If so, then create a results array and a temporary one

	// to hold the data

	$resultArray = array();

	$tempArray = array();

	// Loop through each row in the result set

	while($row = $result->fetch_object())

	{
		// Add each row into our results array

		$tempArray = $row;

		    array_push($resultArray, $tempArray);

	}
	$postArray = $posts = array('posts' => $resultArray);
	// Finally, encode the array to JSON and output the results

	echo json_encode($resultArray);

}else{
	echo "false";
}

// Close connections

mysqli_close($con);

?>