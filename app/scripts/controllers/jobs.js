'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('JobsController', function ($scope, $firebaseObject, $mdDialog, $mdUtil, CurrentJobFactory, ArchiveFactory, AuthFactory) {
    var ref = new Firebase("https://phsrobotics.firebaseio.com/jobs");
    $scope.high = $firebaseObject(ref.child('high'));
    $scope.mid = $firebaseObject(ref.child('mid'));
    $scope.low = $firebaseObject(ref.child('low'));
    $scope.showEditJob = function (ev, job, id) {
      $mdDialog.show({
        controller: 'EditJobController',
        templateUrl: 'views/editjob.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          job: job,
          id: id
        },
      });
    };
    $scope.completeJob = function (id, job) {
      var existingJob = CurrentJobFactory(id, job.priority);
      var archive = ArchiveFactory(id);
      existingJob.$remove();
    }
  })
;
