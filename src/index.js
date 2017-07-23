import $ from 'jquery';
import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
$(function(){
     YjsSync().done(function (y) {
        var vls = y.share.data.get('vls');
        if(vls){
          window.vls = vls;
        }
        else{
            var vls = require('./data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
        require(['./js/Main.js'], function(Main){
            Main.default();
            GoogleLogin();
        });
        
     });
});
