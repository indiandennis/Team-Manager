'use strict';
angular.module('teamManagerApp')
  .factory('NameFactory', function ($firebaseObject) {
      this.getName = function (uid) {
        var ref = new Firebase('https://phsrobotics.firebaseio.com/users/');
        var user = $firebaseObject(ref.child(uid));
        var username = "";
        user.$loaded().then(function () {
          var first = user.fname.$value;
          var last = user.lname.$value;
          console.log(first + last);
          username = first + last;
        });
        return username;
      }
      return
    }
  );
