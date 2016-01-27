/**
 * Created by Ameya on 1/9/2016.
 */
'use strict';
angular.module('teamManagerApp')
  .controller('EditJobController', function ($scope, $mdDialog, NewJobFactory, job, $firebaseObject, id) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.subgroup = job.subgroup;
    $scope.leader = job.leader;
    $scope.title = job.name;
    $scope.desc = job.desc;
    //$scope.location = job.location;
    $scope.priority = job.priority;
    $scope.submit = function () {
      var ref = new Firebase('phsrobotics.firebaseio.com/jobs/' + job.priority);
      console.log('submit edit for ' + id);
      var syncedJob = $firebaseObject(ref.child(id));
      syncedJob.name = $scope.title;
      syncedJob.desc = $scope.desc;
      //syncedJob.location = $scope.location;
      syncedJob.priority = $scope.priority;
      syncedJob.leader = $scope.leader;
      syncedJob.subgroup = $scope.subgroup;
      syncedJob.$save();
      $scope.hide();
    }
  });
