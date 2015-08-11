'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('MainController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
    $scope.toggleLeft = buildToggler('left');    
    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
      return debounceFn;
    }
  });