angular.module('teamManagerApp')
  .factory('AuthFactory', function () {
    return function () {
      var ref = new Firebase('https://phsrobotics.firebaseio.com');
      var authData = ref.getAuth();
      return authData;
    }
  });
