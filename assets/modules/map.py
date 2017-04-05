import gmplot

class Map:
    def __init__(self):
        # (Latitude, Longitude, Zoom level)
        self.city = (51.9279723, 4.490398, 11)
        self.gmap = gmplot.GoogleMapPlotter(self.city[0], self.city[1], self.city[2])
        self.gmap.draw("index.html")

