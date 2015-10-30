'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('JobsController', function ($scope, $firebaseObject) {
    var ref = new Firebase("https://phsrobotics.firebaseio.com/jobs");
    $scope.high = $firebaseObject(ref.child('high'));
    $scope.test = 'a test';
  });
