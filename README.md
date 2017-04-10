# INFPRJ03
Git project for INFPRJ03 by group 2.

# Project members
- Daniel Cullimore
- Dave Caron
- Kevin Lima
- Luciano Sno
- Osman Altun

Download and install the latest build of Electron for your OS and add it to your project's package.json as a devDependency:

```javascript
npm install electron --save-dev
```
This is the preferred way to use Electron, as it doesn't require users to install Electron globally.

You can also use the -g flag (global) to symlink it into your PATH:
```javascript
npm install -g electron
```
If that command fails with an EACCESS error you may have to run it again with sudo:
```javascript
sudo npm install -g electron
```
Now you can just run electron to run electron:
```
electron
```
If you need to use an HTTP proxy you can set these environment variables.

If you want to change the architecture that is downloaded (e.g., ia32 on an x64 machine), you can use the --arch flag with npm install or set the npm_config_arch environment variable:
```
npm install --arch=ia32 electron
```
