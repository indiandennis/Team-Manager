/**
 * Created by Ameya on 1/9/2016.
 */
'use strict';
angular.module('teamManagerApp')
  .controller('NewJobController', function ($scope, $mdDialog, NewJobFactory, AuthFactory) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.title = "";
    $scope.desc = "";
    //$scope.location="";
    $scope.priority = "";
    $scope.leader = "";
    $scope.subgroup = "";
    $scope.submit = function () {
      var firebase = NewJobFactory($scope.priority);
      firebase.name = $scope.title;
      firebase.leader = $scope.leader;
      firebase.subgroup = $scope.subgroup;
      firebase.desc = $scope.desc;
      //firebase.location = $scope.location;
      var priority = "";
      switch ($scope.priority) {
        case "High":
          priority = "high";
          break;
        case "Medium":
          priority = "mid";
          break;
        case "Low":
          priority = "low";
          break;
      }
      var auth = AuthFactory();
      firebase.uid = auth.uid;
      firebase.priority = priority;
      firebase.$save();
      $scope.hide();
    }
  });
