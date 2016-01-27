'use strict';

angular.module('teamManagerApp')
  .controller('SettingsController', function ($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
  });
