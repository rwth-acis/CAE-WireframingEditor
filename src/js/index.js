require(['./../css/style.css', './../../node_modules/jquery-ui/themes/base/theme.css', './../../node_modules/jquery-ui/themes/base/tabs.css']);
import $ from 'jquery';
import resizable from 'jquery-ui/ui/widgets/resizable';
import draggable from 'jquery-ui/ui/widgets/draggable';
import {mxClient, mxUtils, mxEvent, mxGraphModel} from './mxExport.js';

import Wireframe from './Wireframe.js';
import Palette from './Palette.js';
import Editor from './Editor.js';
import Toolbox from './Toolbox.js';

import Y from 'yjs';
import yWebsocketsClient from 'y-websockets-client';
import yMemory from 'y-memory';
import yMap from 'y-map';
import yText from 'y-text';
import yArray from 'y-array';
Y.extend(yArray, yWebsocketsClient, yMemory, yMap, yText);

$(function(){
     if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    } else {
      Y({
        db: {
          name: "memory"
        },
        connector: {
          name: "websockets-client",
          room: "yireframe"
        },
        share: {
          map: 'Map',
          action: 'Map'
        }
      }).then(function (y) {
        window.y = y;
       
        var model = new mxGraphModel();
        //mxLog.show();
        
        var container = document.getElementById('wireframe');
         //disable default context menu
        mxEvent.disableContextMenu(container);
        var wireframe = new Wireframe(container, model);

        var htmlPalette = document.getElementById('palette');
        var palette = new Palette(htmlPalette);

        var editor = new Editor(wireframe, palette, toolbox);


        var htmlToolbox = document.getElementById('toolbox');
        var toolbox = new Toolbox(htmlToolbox, editor);
    
        $('#wireframeWrap').resizable({
          handles: "n, e, s, w, se, sw, nw, ne",
          containment: '#wireframeContainer',
          //aspectRatio: 4/3,
          minWidth: 320,
          minHeight: 200,
          alsoResize: "#wireframe, #draggingBar",
          classes: {
            "ui-resizable-se": "ui-icon ui-icon-grip-diagonal-se"
          },
          stop: function (event, ui) {
            //propagate graph resize to other users; handled in Toolbox.js
            y.share.action.set('graphResize', {
              userId: y.db.userId,
              dHeight: ui.size.height - ui.originalSize.height,
              dWidth: ui.size.width - ui.originalSize.width
            });

          }
        });

        $("#wireframeWrap").draggable({
          handle: "#draggingBar",
          containment: '#wireframeContainer'
        });

        $('.hsplit').click(function () {
          var $palette = $('#palette');
          if ($palette.is(':visible')) {
            $palette.hide();
            $('#wireframeContainer').css('left', '-=56');
            $('#toolbox').css('left', '-=56');
            $(this).css('left', '-=56');
          } else {
            $palette.show();
            $(this).css('left', '+=56');
            $('#wireframeContainer').css('left', '+=56');
            $('#toolbox').css('left', '+=56');
          }
        });
      });
    }
});