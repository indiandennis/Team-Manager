'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('SidenavController', function ($scope, $log, $mdSidenav) {
    $scope.$on("closeNav", function() {
        $mdSidenav('left').close()
        .then(function () {
          $log.debug('close LEFT is done');
        });
    });
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug('close RIGHT is done');
        });
    };
  });