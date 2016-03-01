// app.js
angular.module('YOUR-APP-NAME', ['auth0', 'angular-storage', 'angular-jwt'])
.config(function (authProvider) {
  authProvider.init({
    domain: 'aaipdashboard.auth0.com',
    clientID: 'ZC2i18F6399hnESqTRKIpiTVORMZv177'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});