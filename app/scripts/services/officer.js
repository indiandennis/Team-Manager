angular.module('teamManagerApp')
  .factory('OfficerFactory', function ($firebaseAuth) {
      return function () {
        var ref = new Firebase('https://phsrobotics.firebaseio.com');
        var authData = ref.getAuth();
        var officer = false;
        if (authData) {
          if (authData.provider == "password") {
            officer = true;
          }
        }
        return officer;
      }
    }
  );
