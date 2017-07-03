/*global gapi, y*/
import { mxWindow } from './misc/mxExport.js';
import $ from 'jquery';
import randomColor from 'randomcolor';
function UserWindow() {
    var $userList = $('#userList');
    var $userTable = $userList.find('table');

    var remoteUsers = [];
    var height = 50;
    var width = 210;
    var wnd = new mxWindow("User List", $userList[0], 600, 100, width, height, false, true);
    wnd.setVisible(true);
    wnd.setMaximizable(false);
    wnd.setResizable(true);
    wnd.setClosable(true);
    wnd.destroyOnClose = false;

    var joinUser = function () {
        window.onbeforeunload = function () {
            y.share.join.set('leave', y.db.userId);
        };
        window.onunload = function () {
            y.share.join.set('leave', y.db.userId);
        }
        var getUserEntry = function (userId, userName, imageUrl, color) {
            var entry = '<tr id="' + userId + '" style="display: flex; background : ' + color + '"><td><img src="' + imageUrl + '" height="42" width="42"></td><td style="font-size: 15;color: white;padding : 12;">' + userName + '</td></tr>';
            return $(entry);
        }
        y.share.users.observe(function (event) {
            if (event.name !== y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                var $entry = getUserEntry(event.name, event.value.name, event.value.image, event.value.color);
                $userTable.append($entry);
                remoteUsers.push(event.name);
                height += 45;
                wnd.setSize(width, height);
            }
        });
        y.share.join.observe(function (event) {
            if (event.name === 'leave' && y.db.userId !== event.value) {
                $('#' + event.value).remove();
                if (remoteUsers.indexOf(event.value) !== -1)
                    remoteUsers.splice(remoteUsers.indexOf(event.value), 1);
                return;
            }
            if (event.name !== y.db.userId && !event.value) {
                y.share.join.set(y.db.userId, { receiver: event.name, userInfo: y.share.users.get(y.db.userId) });
            }
            else if (event.value && event.value.receiver === y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                $userTable.append(getUserEntry(event.value.name, event.value.userInfo.name, event.value.userInfo.image, event.value.userInfo.color));
                remoteUsers.push(event.value.userId);
                height += 45;
                wnd.setSize(width, height);
            }
        });

        $('.g-signin2').hide();
        var profile = auth2.currentUser.get().getBasicProfile();
        var color = randomColor();
        var $userEntry = getUserEntry(y.db.userId, profile.getName(), profile.getImageUrl(), color);
        $userTable.append($userEntry);
        $userTable.append($('<tr><th>Collaborators</th></tr>'));
        height += 50;
        wnd.setSize(width, height);
        y.share.users.set(y.db.userId, { name: profile.getName(), image: profile.getImageUrl(), color: color });
        y.share.join.set(y.db.userId, false);
    }

    var auth2 = gapi.auth2.init();
    if (auth2.isSignedIn.get()) {
        joinUser();
    }
    else {
        auth2.isSignedIn.listen(function (isSignedIn) {
            if (isSignedIn)
                joinUser();
        })
    }



}

export default UserWindow;