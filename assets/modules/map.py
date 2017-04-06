import gmplot

class Map:
    def __init__(self):
        self.latitudes = 0, 51.9233166, 51.9202088
        self.longitudes = 0, 4.4743217, 4.4785268
        # (Latitude, Longitude, Zoom level)
        self.city = (51.9279723, 4.490398, 11)
        self.gmap = gmplot.GoogleMapPlotter(self.city[0], self.city[1], self.city[2])
        self.gmap.scatter(self.latitudes, self.longitudes, '#3B0B39', size=200, marker=False)
        self.gmap.draw("index.html")

