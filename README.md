# CAE-Wireframing Editor

The repository contains the source code for the wireframing editor used by the Community Application Editor (CAE). 

### Installation
Make sure you have [nodejs & npm](https://nodejs.org/en/) installed. 
Install all dependecies and run the webpack build script to generate the appilcation.
```sh
$ npm install
$ npm run build
```
The application can be found in the dist-folder. Just use your favorite HTTP-Server to serve the generated files.

### Development Server
For development we highly recommend to use the webpack development server. Therefore just run the following command to start the server.
```sh
$ npm run start
```
Point your browser to http://localhost:8080/.
The port can be changed in the *webpack.dev.js*-file.

### Production Build
The production build does not contain any source map and the files are uglified.
```sh
$ npm run build:dist
```

### Widget Build
The widget build resues the configuration of the production build. Additionally the application is wrapped in a widget-file which can be deployed on the ROLE SDK.
**NOTE!** Make sure to set the *basePath* in the *config.json* located in the *task*-folder for the widget to be deployed.
```sh
$ npm run build:widget
```

### Documentation Build
The documentation can be found in the doc-folder. Make sure to follow the Installation step to install jsDoc and other modules required.
```sh
$ npm run doc
```
