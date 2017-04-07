var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'https://srv1.flevohost.nl:2083/',
  user     : 'kevinlim_groep2',
  password : 'Qwerty123!',
  database : 'kevinlim_project3'
});

connection.connect();

connection.query('
SELECT `Merk`,COUNT(*) as count 
FROM `THEFTS` 
Where `Merk` NOT IN (
	"ONBEKEND",
	"0",
	"-",
	"DIVERSEN"
)
and `Merk`is not NULL 
and `Merk` <> ''
GROUP BY `Merk` 
ORDER BY count DESC', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();