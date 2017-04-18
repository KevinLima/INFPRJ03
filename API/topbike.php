<?php  
if(isset($_GET['year']) == true){
	$filterYear = htmlspecialchars($_GET['year']);
}


// Create connection
	// NOTE: this is not the real credentials of the DB
$con=mysqli_connect("localhost","USERNAME","PASSWORD","DBNAME");
// Check connection

if (mysqli_connect_errno())

{

  echo "Failed to connect to MySQL: " . mysqli_connect_error();

}

// The SQL query that needs to be excuted 
	// W/o a filter for year
$sql = "SELECT `Merk`,COUNT(*) as Count 
FROM `THEFTS` 
Where `Merk` NOT IN (
	'ONBEKEND',
	'0',
	'-',
	'DIVERSEN'
)
and `Merk`is not NULL 
and `Merk` <> ''
GROUP BY `Merk` 
ORDER BY count DESC";


// This SQL query is excuted when there's a year provided (in the url)
if(isset($filterYear) == true){
	$sql = "SELECT `Merk`,COUNT(*) as Count 
FROM `THEFTS` 
Where `Merk` NOT IN (
	'ONBEKEND',
	'0',
	'-',
	'DIVERSEN'
)
and `Merk`is not NULL 
and `Merk` <> ''
and `Gemiddelde jaar` = ".$filterYear."
GROUP BY `Merk` 
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