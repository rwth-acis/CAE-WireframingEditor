import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/progressbar';

function Loader() {
    var $init, $progressbar, $progressLabel;
    return {
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
        check: function (index, progress) {
            var $node = $("#loading").find('p:eq(' + index + ')');
            $node.append('<span class="ui-icon ui-icon-circle-check" style="float:left;"></span>');
            $node.css('opacity', 1);
            $progressbar.progressbar("value", progress);
        },
        destroy : function(timeout){
            setTimeout(function(){
                $init.dialog( "destroy" );    
                $init.remove();            
            }, timeout);
        }
    }
}
export default new Loader();
