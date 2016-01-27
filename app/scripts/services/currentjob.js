'use strict';
angular.module('teamManagerApp')
  .factory('CurrentJobFactory', function ($firebaseObject) {
    return function (id, priority) {
      // create a reference to the database node where we will store our data
      var ref = new Firebase('https://phsrobotics.firebaseio.com/jobs/' + priority);
      var job = $firebaseObject(ref.child(id));
      return job;
    }
  });
