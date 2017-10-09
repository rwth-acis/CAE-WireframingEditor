/*global  y*/
/**
 * @module
 */
import {
    mxWindow
} from './misc/mxExport.js';
import $ from 'jquery';
import randomColor from 'randomcolor';
import Noty from 'noty';
/**
 * Generate a user list wrapped in a mxWindow
 * Retrieve all necessary infromation with y.share.yfUsers.get(y.db.userId) 
 * @example y.share.yfUsers.get(y.db.userId) = 
        {
            id: "some id",
            name: "Name Surname",
            image: "A url",
            color: "a color"
        }
 * @param {Object} user the object consists of the data about the user
 * @param {Boolean} visible true if the mxWindow is visible or false if not 
 * @param {mxWindow} wnd the mxWindew-object otherwise it will be created
 * @return {undefined}
 */
function UserList(user, visible, wnd) {
    /**
     * the div html elements that contains the user list
     * @member {jQuery}
     */
    var $userList = $('#userList');

    /**
     * The user list table
     * @member {jQuery}
     */
    var $userTable = $userList.find('table');

    /**
     * The ids of all remote users
     * @member {String[]}
     */
    var remoteUsers = [];

    /**
     * The default height of the mxWindow 
     * @default 50
     * @member {Integer}
     */
    var height = 50;
    
    /**
     * The default width of the mxWindow
     * @member {Integer}
     * @default 210
     */
    var width = 210;
    
    /**
     * The mxWindow-instance of the user list
     * @member {mxWindow}
     */
    var wnd = new mxWindow("User List", $userList[0], 600, 100, width, height, false, true);
    wnd.setVisible(visible !== undefined ? visible : true);
    wnd.setMaximizable(false);
    wnd.setResizable(true);
    wnd.setClosable(true);
    wnd.destroyOnClose = false;

    /**
     * @event
     * @return {undefined}
     * @memberof {UserList}
     */
    window.onbeforeunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    };
    window.onunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    }
    /**
     * Generate a row entry for user list table
     * @param {String} userId the user id
     * @param {String} userName the name of the user
     * @param {String} imageUrl the url to the avatar of the user
     * @param {String} color the randomed color for the user
     * @return {JQuery} the tr-element as a jquery object
     */
    var getUserEntry = function (userId, userName, imageUrl, color) {
        var entry = '<tr id="' + userId + '" style="display: flex; background : ' + color + '"><td><img src="' + imageUrl + '" height="42" width="42"></td><td style="font-size: 15;color: white;padding : 12;">' + userName + '</td></tr>';
        return $(entry);
    }
    if (user) {
        y.share.yfUsers.observe(function (event) {
            if (event.name !== y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                var $entry = getUserEntry(event.name, event.value.name, event.value.image, event.value.color);
                $userTable.append($entry);
                remoteUsers.push(event.name);
                height += 45;
                wnd.setSize(width, height);
                new Noty({
                    type: 'success',
                    layout : 'topRight',
                    text: 'User ' + event.value.name + ' joined the space',
                    timeout: 750
                }).show();
            }
        });
        y.share.yfJoin.observe(function (event) {
            if (event.name === 'leave' && y.db.userId !== event.value) {
                $('#' + event.value).remove();
                if (remoteUsers.indexOf(event.value) !== -1)
                    remoteUsers.splice(remoteUsers.indexOf(event.value), 1);
                new Noty({
                    type: 'error',
                    layout : 'topRight',
                    text: 'User ' + y.share.yfUsers.get(event.value).name + ' left the space',
                    timeout: 750
                }).show();
                return;
            }
            if (event.name !== y.db.userId && !event.value) {
                y.share.yfJoin.set(y.db.userId, {
                    receiver: event.name,
                    userInfo: y.share.yfUsers.get(y.db.userId)
                });
            } else if (event.value && event.value.receiver === y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                $userTable.append(getUserEntry(event.value.name, event.value.userInfo.name, event.value.userInfo.image, event.value.userInfo.color));
                remoteUsers.push(event.value.userId);
                height += 45;
                wnd.setSize(width, height);
            }
        });

        var color = user.hasOwnProperty('color') ? user.color : randomColor();            
        var $userEntry = getUserEntry(y.db.userId, user.name, user.imageUrl, color);
        $userTable.append($userEntry);
        $userTable.append($('<tr><th>Collaborators</th></tr>'));
        height += 50;
        wnd.setSize(width, height);
        y.share.yfUsers.set(y.db.userId, {
            id: user.id,
            name: user.name,
            image: user.imageUrl,
            color: color
        });
        y.share.yfJoin.set(y.db.userId, false);
    }
    return wnd;
}

export default UserList;