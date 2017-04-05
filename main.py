import gmplot
import htmlPy
import os

app = htmlPy.AppGUI(title=u"INFPRJ03", maximized=True)

app.template_path = os.path.abspath(".")
app.static_path = os.path.abspath(".")

app.template = ("index.html", {"username": "htmlPy_user"})

app.start()

