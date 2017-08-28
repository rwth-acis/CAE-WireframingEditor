/*global gapi*/
/**
 * @module
 */
import UserList from './UserList.js';
import $ from 'jquery';

/**
 * Log in to google and generates the user list
 * @async
 * @return {undefined}
 */
function GoogleLogin() {
    var deferred = $.Deferred();
    var auth2 = gapi.auth2.init();
    var profile;
    if (auth2.isSignedIn.get()) {
        profile = auth2.currentUser.get().getBasicProfile();
        UserList({ id: profile.getId(), name: profile.getName(), imageUrl: profile.getImageUrl() });
        deferred.resolve(profile.getId());
    }
    else {
        auth2.isSignedIn.listen(function (isSignedIn) {
            if (isSignedIn)
                profile = auth2.currentUser.get().getBasicProfile();
            UserList({ id: profile.getId(), name: profile.getName(), imageUrl: profile.getImageUrl() });
            deferred.resolve(profile.getId());
        });
        UserList();
    }
    return deferred.promise();
}
export default GoogleLogin;