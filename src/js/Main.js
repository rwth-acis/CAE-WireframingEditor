require(['./../css/style.css', './../../node_modules/jquery-ui/themes/base/theme.css', './../../node_modules/jquery-ui/themes/base/tabs.css', '../../node_modules/mxgraph/javascript/src/css/common.css', '../../node_modules/jstree/dist/themes/default/style.min.css']);
import $ from 'jquery';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/ui/widgets/draggable';
import { mxClient, mxUtils, mxCodec, mxEvent, mxRectangle } from './misc/mxExport.js';
import YjsSync from './misc/YjsSync.js';
import CONST from './misc/Constants.js';
import Util from './misc/Util.js';

import WireframeModel from './WireframeModel.js';
import Wireframe from './Wireframe.js';
import Palette from './Palette.js';
import Editor from './Editor.js';
import Toolbox from './Toolbox.js';
/**
 * The Main function of the Wireframing editor
 * @param {GoogleLogin || RoleLogin} login 
 * @param {boolean} disableDragging 
 * @param {$.Deferred()} deferred for testing build only. not used in development or production build
 */
export default function (login, disableDragging, deferred) {
    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    } else {
      YjsSync().done(function (y) {
        if(login)
          login();
        var model = new WireframeModel();
        var container = document.getElementById('wireframe');
        //disable default context menu
        mxEvent.disableContextMenu(container);
        var wireframe = new Wireframe(container, model);

        var htmlPalette = document.getElementById('palette');
        var palette = new Palette(htmlPalette);

        var editor = new Editor(wireframe, palette);

        //After the editor the add elements to window
        var xml = y.share.data.get('model');
        if (xml) {
          var doc = mxUtils.parseXml(xml);
          var codec = new mxCodec(doc);
          codec.decode(doc.documentElement.firstChild, model);
          Util.initSharedData(wireframe.getDefaultParent(), wireframe);
          model.initMetaFromXml(doc.documentElement);
          $('#wireframeWrap').css('width', model.getAttribute('width')).css('height', model.getAttribute('height'));
          wireframe.maximumGraphBounds = new mxRectangle(0, 0, parseInt(model.getAttribute('width')), parseInt(model.getAttribute('height')));
          var bounds = wireframe.getBoundingBox(wireframe.getDefaultParent().children);
          var name = model.getAttribute('_name');
          if(name.length > 0){
            $('#draggingBar').append(name);
          }
          model.initSharedData();
        }

        var htmlToolbox = document.getElementById('toolbox');
        new Toolbox(htmlToolbox, editor);

        $('#wireframeWrap').resizable({
          //handles: "n, e, s, w, se, sw, nw, ne",
          handles : "se",
          containment: '#wireframeContainer',
          //aspectRatio: 4/3,
          minWidth: bounds ? bounds.x + bounds.width : 320,
          minHeight: bounds ? bounds.y + bounds.height : 200,
          alsoResize: "#wireframe, #draggingBar",
          classes: {
            "ui-resizable-se": "ui-icon ui-icon-grip-diagonal-se"
          },
          stop: function (event, ui) {
            //propagate graph resize to other users; handled in Toolbox.js
            y.share.action.set(CONST.ACTIONS.SHARED.GRAPH_RESIZE, {
              userId: y.db.userId,
              height: ui.size.height,
              width: ui.size.width
            });
            model.setAttribute('height', ui.size.height);
            model.setAttribute('width', ui.size.width);
            Util.Save(wireframe); 
          }
        });
        if(!disableDragging){
          $("#wireframeWrap").draggable({
            handle: "#draggingBar",
            containment: '#wireframeContainer'
          });
        }

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
        //For testing only
        if(deferred) deferred.resolve(editor);
      });
    }
}