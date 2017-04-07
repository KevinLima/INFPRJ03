# INFPRJ03
Git project for INFPRJ03 by group 2.

# Project members
- Daniel Cullimore
- Dave Caron
- Kevin Lima
- Luciano Sno
- Osman Altun

# Prerequisites
This application requires Python (3) with the [gmplot](https://github.com/vgm64/gmplot), [htmlPy](https://github.com/amol-mandhane/htmlPy), [Jinja (2)](https://github.com/pallets/jinja) and [PySide](https://github.com/pyside/PySide) modules to build.
## Debian (9) Installation Guide
```shell
su -
apt install python3 python3-gmplot python3-jinja2 python3-pip python3-pyside
exit
pip3 install htmlpy
```
# Guidelines Installations
Install gmplot with pip install gmplot
Install htmlPy with pip install htmlPy
Install Jinja2 with pip install Jinja2

Install PySide with pip install PySide 

Execute the step below, if you receive the following error:Failed to find the MSVC compiler version 10.0 on your system.
pip install --global-option="--make-spec=mingw" PySide

Install electron with the following steps
- npm install electron --save-dev
- npm install -g electron
Now you can just run electron to run electron:
electron
)
