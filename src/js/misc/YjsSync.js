import $ from 'jquery';
import Y from 'yjs';
import yWebsocketsClient from 'y-websockets-client';
import yMemory from 'y-memory';
import yMap from 'y-map';
import yText from 'y-text';
import yArray from 'y-array';
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
            room: space || 'yireframe'
        },
        share: {
            action: 'Map',
            attrs: 'Map',
            data : 'Map',
            awareness : 'Map', 
            users : 'Map',
            join : 'Map',
            //Syncmeta stuff not used by the Wireframe
            nodes: 'Map',
            edges : 'Map', 
            select: 'Map', 
            canvas: 'Map'
        }
    }).then(function (y) {
        window.y = y;
        deferred.resolve(y);
    });
    return deferred.promise();
}