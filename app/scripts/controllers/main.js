/* global SettingsController */
/* global angular */
'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('MainController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog) {
    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug('toggle ' + navID + ' is done');
          });
      }, 200);
      return debounceFn;
    }
    
    $scope.toggleLeft = buildToggler('left');
    
    $scope.showSettings = function (ev) {
      $mdDialog.show({
        controller: 'SettingsController',
        templateUrl: 'views/settings.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function () {
          $log.debug('Settings dialog opened');
        }, function () {
          $log.debug('Settings dialog closed');
        });
    };
  });
  