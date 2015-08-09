'use strict';

/**
 * @ngdoc overview
 * @name teamManagerApp
 * @description
 * # teamManagerApp
 *
 * Main module of the application.
 */
angular
  .module('teamManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngAria'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tabs/jobs');
    
    $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: 'true',
      templateUrl: 'views/tabs.html',
      controller: function($scope) {
        $scope.$on('$stateChangeSuccess', function(event, toState) {
          $scope.currentTab = toState.data.selectedTab;
        });
      }
    })
    .state('tabs.jobs', {
      url: '/jobs',
      data: {
        'selectedTab': 0
      },
      views: {
        'jobs': {
          templateUrl: 'views/jobs.html',
          controller: 'JobsController'
        }
      }
    })
    .state('tabs.timeline', {
      url: '/timeline',
      data: {
        'selectedTab': 1
      },
      views: {
        'timeline': {
          templateUrl: 'views/timeline.html',
          controller: 'TimelineController'
        }
      }
    })
    .state('tabs.files', {
      url: '/files',
      data: {
        'selectedTab': 2
      },
      views: {
        'files': {
          templateUrl: 'views/files.html',
          controller: 'FilesController'
        }
      }
    });
  });