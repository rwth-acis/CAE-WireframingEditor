/*@global localStorage*/
import UserList from './UserList.js';
import $ from 'jquery';

function RoleLogin(){
    var url = localStorage.userinfo_endpoint + '?access_token=' + localStorage.access_token;
    $.get(url, function(data){
        UserList({name : data.name, imageUrl : data.picture}, false);
    });
}

export default RoleLogin;