'use strict';
angular.module('teamManagerApp')
  .directive('name', ['NameFactory', function (NameFactory) {
    return {
      restrict: 'E',
      scope: {
        uid: "="
      },
      template: "{{name}}",
      link: link
    };
    function link(scope, NameFactory) {

      var name = NameFactory.getName(scope.uid);
      scope.name = name;
      console.log(name);
    }
  }]);
