'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('TabsCtrl', ['RedirectService', function ($scope) {
    var tabs = [
      { title: 'jobs'},
      { title: 'timeline'}
    ];
    
    $scope.selectedIndex = 0;
    // $scope.selectedIndex = parseInt($cookies.selectedIndex);
    $scope.tabs = tabs;
    $scope.announceSelected = function(tab, index) {

    //$cookies["selectedIndex"] = index;
    RedirectService.To(tab.title);
    }
  }])
