'use strict';

/**
 * @ngdoc service
 * @name teamManagerApp.redirect
 * @description
 * # redirect
 * Service in the teamManagerApp.
 */
angular.module('teamManagerApp')
  .service('RedirectService', function ($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
      To : function(key){
        return $location.path(key)
      },
    };
  });
