/*global gapi*/
/**
 * @module
 */
import UserList from './UserList.js';

/**
 * Log in to google and generates the user list
 * @return {undefined}
 */
function GoogleLogin() {
    var auth2 = gapi.auth2.init();
    var profile;
    if (auth2.isSignedIn.get()) {
        profile = auth2.currentUser.get().getBasicProfile();
        UserList({ name: profile.getName(), imageUrl: profile.getImageUrl() });
    }
    else {
        auth2.isSignedIn.listen(function (isSignedIn) {
            if (isSignedIn)
                profile = auth2.currentUser.get().getBasicProfile();
            UserList({ name: profile.getName(), imageUrl: profile.getImageUrl() });
        });
        UserList();
    }
}
export default GoogleLogin;