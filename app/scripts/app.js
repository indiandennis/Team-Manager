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
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state('tabs', {
      abstract: true,
      url: '/tabs',
      templateUrl: 'tabs.html',
      controller: function($scope) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
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
          controller: JobsController
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
          controller: TimelineController
        }
      }
    })
    .state('tabs.files', {
      url: '/files',
      data: {
        'selectedTab': 1
      },
      views: {
        'files': {
          controller: FilesController
        }
      }
    })
  });