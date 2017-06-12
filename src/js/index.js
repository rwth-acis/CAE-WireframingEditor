require(['./../css/style.css', './../../node_modules/jquery-ui/themes/base/theme.css', './../../node_modules/jquery-ui/themes/base/tabs.css', '../../node_modules/mxgraph/javascript/src/css/common.css']);
import $ from 'jquery';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/ui/widgets/draggable';
import { mxClient, mxUtils, mxCodec, mxEvent, mxGraphModel, mxLog } from './misc/mxExport.js';
import YjsSync from './misc/YjsSync.js';
import CONST from './misc/Constants.js';

import Wireframe from './Wireframe.js';
import Palette from './Palette.js';
import Editor from './Editor.js';
import Toolbox from './Toolbox.js';
$(function () {
  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    YjsSync().done(function (y) {
      window.mxGraphModel = mxGraphModel;
      var model = new mxGraphModel();
      mxLog.show();

      var container = document.getElementById('wireframe');
      //disable default context menu
      mxEvent.disableContextMenu(container);
      var wireframe = new Wireframe(container, model);



      var htmlPalette = document.getElementById('palette');
      var palette = new Palette(htmlPalette);

      var editor = new Editor(wireframe, palette, toolbox);

      //After the editor the add elements to window
      var xml = y.share.data.get('model');
      if (xml) {
        var doc = mxUtils.parseXml(xml);
        var codec = new mxCodec(doc);
        codec.decode(doc.documentElement, wireframe.getModel());
      }

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
          y.share.action.set(CONST.ACTIONS.SHARED.GRAPH_RESIZE, {
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
        var paletteWidth = $palette.css('width');
        if ($palette.is(':visible')) {
          $palette.hide();
          $('#wireframeContainer').css('left', '-=' + paletteWidth);
          $('#toolbox').css('left', '-=' + paletteWidth);
          $(this).css('left', '-=' + paletteWidth);
        } else {
          $palette.show();
          $(this).css('left', '+=' + paletteWidth);
          $('#wireframeContainer').css('left', '+=' + paletteWidth);
          $('#toolbox').css('left', '+=' + paletteWidth);
        }
      });
    });
  }
});