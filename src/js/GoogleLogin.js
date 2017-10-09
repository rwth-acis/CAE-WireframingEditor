/*global gapi*/
/**
 * @module
 */
import {
    mxWindow
} from './misc/mxExport.js';
import UserList from './UserList.js';
import $ from 'jquery';

/**
 * Log in to google and generates the user list
 * @async
 * @return {undefined}
 */
function GoogleLogin() {
    var deferred = $.Deferred();
    var loginWnd = new mxWindow("Google Login", $('#googleLogin')[0], 600, 100, 120, 50, false, true);
    loginWnd.setVisible(true);
    loginWnd.setResizable(false);
    loginWnd.setClosable(true);

    var auth2 = gapi.auth2.init();
    var profile;
    if (auth2.isSignedIn.get()) {
        profile = auth2.currentUser.get().getBasicProfile();
        loginWnd.destroy();
        UserList({ id: profile.getId(), name: profile.getName(), imageUrl: profile.getImageUrl() });
        deferred.resolve(profile.getId());
    }
    else {
        auth2.isSignedIn.listen(function (isSignedIn) {
            if (isSignedIn)
                profile = auth2.currentUser.get().getBasicProfile();
            loginWnd.destroy();
            UserList({ id: profile.getId(), name: profile.getName(), imageUrl: profile.getImageUrl() });
            deferred.resolve(profile.getId());
        });
    }
    return deferred.promise();
}
export default GoogleLogin;