/*global localStorage, y*/
/**
 * @module
 */
import UserList from './UserList.js';
import $ from 'jquery';

/**
 * In the ROLE SDK request the user data and generate a user list
 * Uses the data in the localStorage to generate the request for the user data
 * @async
 * @return {undefined}
 */
function RoleLogin(){
    var COLORS = [
        "#8AFFC8", //türkis
        "#8A9FFF", //light blue
        "#FF8A8A", //Rot
        "#FFC08A", //Orange
        "#FF8AD2", //Pink
        "#8AEBFF", //Blue
        "#C68AFF", //Lila
        "#8EFF8A" //green
    ];

    /**
     * Map an integer to one of ten colors
     * @param id the global id
     * @return {string} the color
     */
    var getColor = function(id){
        return COLORS[id%COLORS.length];
    };
    var deferred = $.Deferred();
    var url = localStorage.userinfo_endpoint + '?access_token=' + localStorage.access_token;
    $.get(url, function(data){
        var userInfo = y.share.userList.get(data.sub);
        var color;
        if(userInfo)
            color = getColor(userInfo.globalId);

        UserList({id: data.sub, name : data.name, imageUrl : data.picture, color : color}, false);
        deferred.resolve();
    }).fail(function(error){
        deferred.reject(error);
    });
    
    return deferred.promise();
}

export default RoleLogin;