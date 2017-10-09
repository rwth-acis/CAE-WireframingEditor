import $ from 'jquery';
import Y from './../../../node_modules/yjs/dist/y.js';
import yWebsocketsClient from './../../../node_modules/y-websockets-client/dist/y-websockets-client.js';
import yMemory from './../../../node_modules/y-memory/dist/y-memory.js';
import yMap from './../../../node_modules/y-map/dist/y-map.js';
import yText from './../../../node_modules/y-text/dist/y-text.js';
import yArray from './../../../node_modules/y-array/dist/y-array.js';
Y.extend(yArray, yWebsocketsClient, yMemory, yMap, yText);

window.Y = Y;
export default function (space) {
    var deferred = $.Deferred();
    Y({
        db: {
            name: "memory"
        },
        connector: {
            name: "websockets-client",
            room: space || 'yireframe',
            url: 'http://127.0.0.1:1234'
        },
        share: {
            action: 'Map',
            attrs: 'Map',
            data : 'Map',
            awareness : 'Map', 
            yfUsers : 'Map',
            yfJoin : 'Map',
            //Syncmeta stuff not used by the Wireframe
            nodes: 'Map',
            edges : 'Map', 
            select: 'Map', 
            canvas: 'Map',
            activity: 'Map',
            userList: 'Map'
        }
    }).then(function (y) {
        window.y = y;
        deferred.resolve(y);
    });
    return deferred.promise();
}