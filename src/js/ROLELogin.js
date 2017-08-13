/*@global localStorage*/
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
    var url = localStorage.userinfo_endpoint + '?access_token=' + localStorage.access_token;
    $.get(url, function(data){
        UserList({name : data.name, imageUrl : data.picture}, false);
    });
}

export default RoleLogin;