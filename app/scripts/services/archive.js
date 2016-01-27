'use strict';
angular.module('teamManagerApp')
  .factory('ArchiveFactory', function ($firebaseObject) {
    return function (id) {
      var ref = new Firebase('https://phsrobotics.firebaseio.com/archive');
      var job = $firebaseObject(ref.child(id));
      return job;
    }
  });
