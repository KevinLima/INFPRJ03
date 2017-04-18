var pagenum=1; 
var yearIndex = 0; 
var status = false; 
var data = [["Street", "Amount"]];
var options = {
    title: "HighScore - Top Stolen Brands",
    width: 600,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    vAxis: {minValue: 0},
    animation:{"startup":true,"duration":1000, "easing":"out"}
};

function initchart()
{
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawchart);
}

function next()
{
    if(pagenum <= Math.floor(dc.topstreet_data[yearIndex].length/10))
    {
        pagenum += 1;
        initchart();
    }
}

function previous()
{
    if(pagenum > 1)
    {
        pagenum -= 1;
        initchart();
    }
}

function drawchart()
{
    var data = google.visualization.arrayToDataTable([["Brand", "Amount"],
    [dc.topstreet_data[yearIndex][pagenum*5-5]["Straat"], parseInt(dc.topstreet_data[yearIndex][pagenum*5-5]["Count"])],
    [dc.topstreet_data[yearIndex][pagenum*5-4]["Straat"], parseInt(dc.topstreet_data[yearIndex][pagenum*5-4]["Count"])],
    [dc.topstreet_data[yearIndex][pagenum*5-3]["Straat"], parseInt(dc.topstreet_data[yearIndex][pagenum*5-3]["Count"])],
    [dc.topstreet_data[yearIndex][pagenum*5-2]["Straat"], parseInt(dc.topstreet_data[yearIndex][pagenum*5-2]["Count"])],
    [dc.topstreet_data[yearIndex][pagenum*5-1]["Straat"], parseInt(dc.topstreet_data[yearIndex][pagenum*5-1]["Count"])]]);
    var materialChart = new google.visualization.BarChart(document.getElementById('chart_div'));
    materialChart.draw(data, options);
}

function reload(year)
{
    index = 0;
    pagenum = 1;
    if(year !== undefined) {index = 2014 - year;}
    yearIndex = index;
    initchart();
}