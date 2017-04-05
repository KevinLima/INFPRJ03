import gmplot

class Map:
    def __init__(self):
        self.gmap = gmplot.GoogleMapPlotter(37.428, -122.145, 16)
        self.gmap.draw("index.html")
