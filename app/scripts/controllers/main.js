'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
