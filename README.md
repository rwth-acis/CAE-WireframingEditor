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
The port can be changed in the webpack.dev.js-file.