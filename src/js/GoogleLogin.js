/*global gapi*/
import UserList from './UserList.js';

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
    }
}
export default GoogleLogin;