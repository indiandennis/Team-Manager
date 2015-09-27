'use strict';

/**
 * @ngdoc function
 * @name teamManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamManagerApp
 */
angular.module('teamManagerApp')
  .controller('JobsController', function ($scope, $firebaseObject, $firebaseAuth) {
    console.log(".______   .______        ______        _______..______    _______   ______ .___________.   .______        ______   .______     ______   .___________. __    ______     _______.\n|   _  \\  |   _  \\      /  __  \\      /       ||   _  \\  |   ____| /      ||           |   |   _  \\      /  __  \\  |   _  \\   /  __  \\  |           ||  |  /      |   /       |\n|  |_)  | |  |_)  |    |  |  |  |    |   (----`|  |_)  | |  |__   |  ,----'`---|  |----`   |  |_)  |    |  |  |  | |  |_)  | |  |  |  | `---|  |----`|  | |  ,----'  |   (----`\n|   ___/  |      /     |  |  |  |     \\   \\    |   ___/  |   __|  |  |         |  |        |      /     |  |  |  | |   _  <  |  |  |  |     |  |     |  | |  |        \\   \\    \n|  |      |  |\\  \\----.|  `--'  | .----)   |   |  |      |  |____ |  `----.    |  |        |  |\\  \\----.|  `--'  | |  |_)  | |  `--'  |     |  |     |  | |  `----.----)   |   \n| _|      | _| `._____| \\______/  |_______/    | _|      |_______| \\______|    |__|        | _| `._____| \\______/  |______/   \\______/      |__|     |__|  \\______|_______/    ")
    console.log("Interested in helping out with this site? Contact Ameya Thakur at redsupercar@gmail.com")
    var ref = new Firebase('https://phsrobotics.firebaseio.com');
    var syncObject = $firebaseObject(ref);
    
    $scope.test = 'a test';
  });
