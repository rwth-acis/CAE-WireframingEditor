/*global  y*/
/**
 * @module
 */
import {
    mxWindow
} from './misc/mxExport.js';
import $ from 'jquery';
import randomColor from 'randomcolor';

/**
 * Generate a user list wrapped in a mxWindow
 * @param {Object} user the object consists of the data about the user
 * @param {Boolean} visible true if the mxWindow is visible or false if not 
 * @return {undefined}
 */
function UserList(user, visible) {
    var $userList = $('#userList');
    var $userTable = $userList.find('table');

    var remoteUsers = [];
    var height = 50;
    var width = 210;
    var wnd = new mxWindow("User List", $userList[0], 600, 100, width, height, false, true);
    wnd.setVisible(visible !== undefined ? visible : true);
    wnd.setMaximizable(false);
    wnd.setResizable(true);
    wnd.setClosable(true);
    wnd.destroyOnClose = false;

    window.onbeforeunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    };
    window.onunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    }
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
            }
        });
        y.share.yfJoin.observe(function (event) {
            if (event.name === 'leave' && y.db.userId !== event.value) {
                $('#' + event.value).remove();
                if (remoteUsers.indexOf(event.value) !== -1)
                    remoteUsers.splice(remoteUsers.indexOf(event.value), 1);
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

        $('.g-signin2').hide();
        var color = randomColor();
        var $userEntry = getUserEntry(y.db.userId, user.name, user.imageUrl, color);
        $userTable.append($userEntry);
        $userTable.append($('<tr><th>Collaborators</th></tr>'));
        height += 50;
        wnd.setSize(width, height);
        y.share.yfUsers.set(y.db.userId, {
            name: user.name,
            image: user.imageUrl,
            color: color
        });
        y.share.yfJoin.set(y.db.userId, false);
    }
}

export default UserList;