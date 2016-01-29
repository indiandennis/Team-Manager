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
  .controller('MainController', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $firebaseAuth, $firebaseObject, OfficerFactory) {
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

    $scope.officer = OfficerFactory();
    $scope.toggleLeft = buildToggler('left');
    $scope.officer = false;
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
    $scope.showNewJob = function (ev) {
      $mdDialog.show({
        controller: 'NewJobController',
        templateUrl: 'views/newjob.html',
        parent: angular.element(document.querySelector('#popupContainer')),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    }
    $scope.showLogin = function (ev) {
      $mdDialog.show({
          controller: 'AuthController',
          templateUrl: 'views/auth.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
        .then(function () {
          $log.debug('Login dialog opened');
        })
    };
    console.log(".______   .______        ______        _______..______    _______   ______ .___________.   .______        ______   .______     ______   .___________. __    ______     _______.\n|   _  \\  |   _  \\      /  __  \\      /       ||   _  \\  |   ____| /      ||           |   |   _  \\      /  __  \\  |   _  \\   /  __  \\  |           ||  |  /      |   /       |\n|  |_)  | |  |_)  |    |  |  |  |    |   (----`|  |_)  | |  |__   |  ,----'`---|  |----`   |  |_)  |    |  |  |  | |  |_)  | |  |  |  | `---|  |----`|  | |  ,----'  |   (----`\n|   ___/  |      /     |  |  |  |     \\   \\    |   ___/  |   __|  |  |         |  |        |      /     |  |  |  | |   _  <  |  |  |  |     |  |     |  | |  |        \\   \\    \n|  |      |  |\\  \\----.|  `--'  | .----)   |   |  |      |  |____ |  `----.    |  |        |  |\\  \\----.|  `--'  | |  |_)  | |  `--'  |     |  |     |  | |  `----.----)   |   \n| _|      | _| `._____| \\______/  |_______/    | _|      |_______| \\______|    |__|        | _| `._____| \\______/  |______/   \\______/      |__|     |__|  \\______|_______/    ")
    console.log("Interested in helping out with this site? Contact Ameya Thakur at redsupercar@gmail.com")
    var ref = new Firebase('https://phsrobotics.firebaseio.com');
    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        if (authData.provider == "password") {
          $scope.officer = true;
        }
      } else {
        console.log("User is logged out");
      }
    }

    ref.onAuth(authDataCallback);
  });
