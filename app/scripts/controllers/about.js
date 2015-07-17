'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
