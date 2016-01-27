angular.module('teamManagerApp')
  .factory('NewJobFactory', function ($firebaseObject) {
      return function (rawPriority) {
        // create a reference to the database node where we will store our data
        var priority = "";
        switch (rawPriority) {
          case "High":
            priority = "high";
            break;
          case "Medium":
            priority = "mid";
            break;
          case "Low":
            priority = "low";
            break;
        }
        var ref = new Firebase('https://phsrobotics.firebaseio.com/jobs/' + priority);
        var timeId = Date.now();
        var categoryRef = ref.child(timeId);
        // return it as a synchronized object
        return $firebaseObject(categoryRef);
      }
    }
  );
