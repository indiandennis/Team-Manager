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

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/jobs.html',
        controller: 'JobsController'
      });
});