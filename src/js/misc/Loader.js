/**
 * @module Misc
 */

import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/progressbar';

/**
 * A singelton class which provides a loading screen for the initialization of the wireframing editor
 * @classdesc Provides the loading screen at startup 
 * @constructor
 * @requires jquery
 * @memberof module:Misc
 */
function Loader() {
    var $init, $progressbar, $progressLabel;
    return {
        /**
         * Initialize the loader
         * Always call this method first
         * @returns {undefined}
         * @memberof module:Misc.Loader
         */
        init: function(){
            $init  = $('#init');
            $progressbar = $("#progressbar");
            $progressLabel = $(".progress-label");
            $init.dialog({
                resizable: false,
                modal: true,
                height: "auto",
                width: 400,
                classes: {
                    "ui-dialog": "no-close",
                }
            });
            $progressbar.progressbar({
                value: false,
                change: function () {
                    $progressLabel.text($progressbar.progressbar("value") + "%");
                },
                complete: function () {
                    $progressLabel.text("Complete!");
                }
            });
        },
        /**
         * Check the step in the initialization at the corresponding index as successful
         * @param {Integer} index the index in the initialization step
         * @param {Integer} progress the progress of the initialization
         * @returns {undefined}
         * @memberof module:Misc.Loader
         */
        checkSuccessful: function (index, progress) {
            var $node = $("#loading").find('p:eq(' + index + ')');
            $node.append('<span class="ui-icon ui-icon-circle-check" style="float:left;"></span>');
            $node.css('opacity', 1);
            $progressbar.progressbar("value", progress);
        },
        /**
         * Check the step in the initialization at the corresponding index as fail
         * @param {Integer} index the index in the initialization step
         * @param {Integer} progress the progress of the initialization
         * @returns {undefined}
         * @memberof module:Misc.Loader
         */
        checkFail : function(index, progress){
            var $node = $("#loading").find('p:eq(' + index + ')');
            $node.append('<span class="ui-icon ui-icon-alert" style="float:left;"></span>');
            $node.css('opacity', 1);
            $progressbar.progressbar("value", progress);
        },
        /**
         * Destroy the initlialization loader
         * @param {Integer} timeout the timeout of the destroy
         * @returns {undefined}
         * @memberof module:Misc.Loader
         */
        destroy : function(timeout){
            setTimeout(function(){
                $init.dialog( "destroy" );    
                $init.remove();            
            }, timeout);
        }
    }
}
export default new Loader();
