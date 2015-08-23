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
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngAria'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '900',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('amber');

    $urlRouterProvider.otherwise('/tabs/jobs');

    $stateProvider
      .state('tabs', {
        url: '/tabs',
        abstract: 'true',
        templateUrl: 'views/tabs.html',
        controller: function ($scope) {
          $scope.$on('$stateChangeSuccess', function (event, toState) {
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
      });
  });