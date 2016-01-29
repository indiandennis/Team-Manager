'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:AuthController
 * @description
 * # AuthController
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('AuthController', function ($scope, $mdDialog, $firebaseAuth, $firebaseObject, OfficerFactory) {
    var ref = new Firebase('https://phsrobotics.firebaseio.com');
    var syncObject = $firebaseObject(ref);
    $scope.logout = function () {
      ref.unauth();
      $scope.$broadcast("closeNav");
    }
    $scope.login = function () {
      ref.authWithPassword({
        email: $scope.email,
        password: $scope.password
      }, authHandler);
    }
    $scope.officer = OfficerFactory();
    $scope.error = "false";
    function authHandler(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $mdDialog.hide();
        console.log("Authenticated successfully with payload:", authData);
      }
    }
  });
