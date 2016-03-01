$(document).ready(function() {
    var widget = new Auth0Widget({
        domain: 'aaipdashboard.auth0.com',
        clientID: 'ZC2i18F6399hnESqTRKIpiTVORMZv177',
        callbackURL: location.href,
        callbackOnLocationHash: true
    });
    
    var userProfile;

    $('.btn btn-lg btn-primary btn-block').click(function(e) {
      e.preventDefault();
      widget.signin({ popup: true} , null, function(err, profile, token) {
        if (err) {
          // Error callback
          console.error("Something went wrong: ", err);
          alert("Something went wrong, check the Console errors");
        } else {
          // Success calback

          // Save the JWT token.
          localStorage.setItem('userToken', token);

          // Save the profile
          userProfile = profile;

          $('.login-box').hide();
          $('.logged-in-box').show();
          $('.nickname').text(profile.nickname);
        }
      });
    });

    
    $.ajaxSetup({
      'beforeSend': function(xhr) {
        if (localStorage.getItem('userToken')) {        
          xhr.setRequestHeader('Authorization', 
                'Bearer ' + localStorage.getItem('userToken'));
        }
      }
    });

    $('.btn-api').click(function(e) {
        // Just call your API here. The header will be sent
    })

    
});